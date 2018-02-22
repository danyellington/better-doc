# Better Doctor

This is a website designed to search for doctors in Portland, OR - Version 1: 22/02/2018

##### By: Danyel Murray


#### Dependencies/Set Up
###### npm, gulp, and bower

* Clone github repository https://github.com/danyellington/better-doc.git
* Open terminal and create _.env_ file at the top of the project directory
* Aquire and copy API key from _betterdoctor.com_
* In _.env_ file add: _exports.apiKey = "paste api key you've aquired from better doctor here";_
* Save and run terminal commands: npm install, bower install, gulp build; gulp serve


#### Specifications

| Behavior | Input | Output
|:-------------|:-------------|:-------------
|User searches doctor by first and/or last name | "Kathy Miller" | API returns all doctors matching search
|User searches doctor by symptom | "sore throat" | API returns all doctors in the field to treat specific symptoms (ex: MDs, pediatricians, dentists)
|Returns practice information in addition to doctor on search | "Dr. Smith" | Returns list of Dr. Smiths, last name, first name, address, phone number, website, and availability to new patients
|Returns error messages if no information available | "Danyel Murray"  | "No Dotors found" "No website available"


### Technologies used:
-javascript
-node
-gulp
-bower
-API (betterdoctor)

#### Known bugs:
Please alert to any bugs in my program

##### Contact Details:
##### Danyel: danyelmurray1987@gmail.com

#### License
###### Copyright (C) 2017 Danyel Murray

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
