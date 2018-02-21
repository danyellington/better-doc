import { promise } from './../js/betterDoctor.js';

$(document).ready(function () {
	$('#search').submit(function (event) {
		event.preventDefault();
		let name = $('#name').val();
		let symptom = $('#symptom').val();

		let newSearch = promise(name, symptom);
		$('#result').empty();
		debugger;
		newSearch.then(function (response) {
				let body = JSON.parse(response);
				if (body.data.length < 1) {
					$('#result').text("No doctors found.");
				} else {
					for (let i = 0; i < body.data.length; i++) {
						$('#result').append('<p>' + body.data[i].profile.first_name + ' ' + body.data[i].profile.last_name + '</p>');
					}
				}
			},
			function (error) {
				$('#result').text("There was an error processing your request. Please try again.");
			}
		);
	});
});
