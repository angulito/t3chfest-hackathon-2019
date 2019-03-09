CENTER_LATITUTE = 39.402692
CENTER_LONGITUDE = -2.429336

CENTER_RADIUS = 0.03

NUMBER_OF_POI = 300
POI_TYPES = ["tractor", "arado", "remolque", "pivot"]
POI_BASE_PRICE = 100
POI_VARIANCE = 100

POI_AVAILABILITY_SLOTS = ["L", "M", "X", "J", "V", "S", "D"]

FILE_NAME = "output.txt"


import random
import argparse
import json
import lorem
import math



if __name__ == "__main__":
	random.seed(20)
	parser = argparse.ArgumentParser(description="T3chfest 2k19")
	parser.add_argument('-o', '--output_filename', action='store', help='Output file path')
	args = parser.parse_args()

	poi_list = []

	for i in range(NUMBER_OF_POI):
		poi_dict = {}
		angle = random.uniform(0, 2*math.pi)
		distance = random.uniform(0, CENTER_RADIUS)

		poi_dict['latitude'] 	= CENTER_LATITUTE + distance*math.cos(angle)
		poi_dict['longitude']	= CENTER_LONGITUDE + distance*math.sin(angle)
		poi_dict['type']		= random.choice(POI_TYPES)
		poi_dict['id']		    = i+1
		poi_dict['price'] 		= POI_BASE_PRICE + random.uniform(-POI_VARIANCE, POI_VARIANCE)
		poi_availability = {}
		for slot in POI_AVAILABILITY_SLOTS:
			poi_availability[slot] = bool(random.getrandbits(1))

		poi_dict['availability'] = poi_availability
		poi_dict['description']  = lorem.sentence()

		poi_list.append(poi_dict)
		#f.write(str(lat) + "\t" + str(lon) + "\tcircle1\tred\t" + str(i+1) + "\tdesc\n")

	with open(args.output_filename, 'w') as f:
		f.write(json.dumps(poi_list, ensure_ascii=False))