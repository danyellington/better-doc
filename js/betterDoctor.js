import apiKey from './../.env';

export let promise = function (name, symptom) {
	return new Promise(function (resolve, reject) {
		let request = new XMLHttpRequest();
		// let api_key = apiKey;
		let location = "37.773%2C-122.413%2C100";
		let user_location = "37.773%2C-122.413";
		let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${symptom}&location=${location}&user_location=${user_location}&skip=0&limit=10&user_key=${apiKey}`;
		request.onload = function () {
			if (this.status === 200) {
				resolve(request.response);
			} else {
				reject(Error(request.statusText));
			}
		};
		request.open("GET", url, true);
		request.send();
	});
};
