function call(url) {
  return new Promise((resolve, reject) => {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.setRequestHeader("Accept", "application/json");
    req.onreadystatechange = function(aEvt) {
      if (req.readyState === 4) {
        if (req.status === 200) resolve(JSON.parse(req.responseText));
        else reject("Error loading page\n");
      }
    };
    req.send(null);
  });
}

const api = {
  call
};

export default api;
