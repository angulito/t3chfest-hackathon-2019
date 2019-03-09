var express = require("express");
var app = express();
var cfenv = require("cfenv");
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var cloudant, mydb;

const rentItemsDB = 'rent-items';


app.post("/store-data", function (_, response) {
  var output = require('./data/output.json');

  const mydb = cloudant.db.use(rentItemsDB);
  var doc = {};
  if(!mydb) {
    console.log("No database.");
    response.send(doc);
    return;
  }

  for (var i = 0; i < output.length; i++) {
    setTimeout(function(i) {
      console.log(output[i])
      mydb.insert(output[i], function(err, body, _) {
        if (err) {
          console.log('[mydb.insert] ', err.message);
          response.send("Error");
          return;
        }
      });
    }.bind(null, i), 1000*i);
  }

  response.send(doc);
});


app.get("/api/rent-items", function (_, response) {
  const mydb = cloudant.db.use(rentItemsDB);
  var names = [];
  if(!mydb) {
    console.log("no database");
    response.json(names);
    return;
  }

  mydb.list({ include_docs: true }, function(err, body) {
    if (!err) {
      body.rows.forEach(function(row) {
        if(row.doc)
          names.push(row.doc);
      });
      response.json(names);
    } else {
      console.log("error!")
      console.log(err)
    }
  });
});


// load local VCAP configuration  and service credentials
var vcapLocal;
try {
  vcapLocal = require('./vcap-local.json');
  console.log("Loaded local VCAP", vcapLocal);
} catch (e) {
  console.log("error")
  console.log(e)
}

const appEnvOpts = vcapLocal ? { vcap: vcapLocal} : {}

const appEnv = cfenv.getAppEnv(appEnvOpts);

// Load the Cloudant library.
var Cloudant = require('@cloudant/cloudant');
if (appEnv.services['cloudantNoSQLDB'] || appEnv.getService(/cloudant/)) {

  // Initialize database with credentials
  if (appEnv.services['cloudantNoSQLDB']) {
    // CF service named 'cloudantNoSQLDB'
    cloudant = Cloudant(appEnv.services['cloudantNoSQLDB'][0].credentials);
  } else {
     // user-provided service with 'cloudant' in its name
     cloudant = Cloudant(appEnv.getService(/cloudant/).credentials);
  }
} else if (process.env.CLOUDANT_URL){
  cloudant = Cloudant(process.env.CLOUDANT_URL);
}
if(cloudant) {
  //database name
  var dbName = "grow-and-harvest-db";

  // Create a new "mydb" database.
  cloudant.db.create(dbName, function(err, data) {
    if(!err) { //err if database doesn't already exists
      console.log("Created database: " + dbName);
    }
  });

  // Specify the database we are going to use (mydb)...
  mydb = cloudant.db.use(dbName);
}

//serve static file (index.html, images, css)
app.use(express.static(__dirname + '/build'));



var port = process.env.PORT || 3001
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});
