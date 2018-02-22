import { promise } from './../js/betterDoctor.js';

$(document).ready(function () {
	$('#search').submit(function (event) {
		event.preventDefault();
		let name = $('#name').val();
		let symptom = $('#symptom').val();

		let newSearch = promise(name, symptom);
		$('#result').empty();
		newSearch.then(function (response) {
				let body = JSON.parse(response);
				if (body.data.length < 1) {
					$('#result').text("No doctors found.");
				} else {
					for (let i = 0; i < body.data.length; i++) {
						let first_name = body.data[i].profile.first_name;
						let last_name = body.data[i].profile.last_name;
						$('#result').append(`<br><br><br><strong>${last_name}, ${first_name}</strong>`);

						for (let j = 0; j < body.data[i].practices.length; j++) {
							let streetAddress = body.data[i].practices[j].visit_address.street;
							let address_city = body.data[i].practices[j].visit_address.city;
							let address_state_long = body.data[i].practices[j].visit_address.state_long;
							let address_zip = body.data[i].practices[j].visit_address.zip;

							$("#result").append(`<br>${streetAddress}, <br>${address_city}, ${address_state_long} ${address_zip}`);

							let patients = body.data[i].practices[j].accepts_new_patients;
							let website = body.data[i].practices[j].website;
							if (website === undefined) {
								$("#result").append(`<br>No website available.`);
							} else {
								$("#result").append(`<br><a href="${website}">${website}</a>`);
							}
							for (let k = 0; k < body.data[i].practices[j].phones.length; k++) {
								let type = body.data[i].practices[j].phones[k].type;
								let number = body.data[i].practices[j].phones[k].number;
								$('#result').append(`<br>${type}: ${number}`)

							}
						}
					}
				}
			},
			function (error) {
				$('#result').text(`There was an error processing your request. Please try again (${error.message})`);
			}
		);
	});
});
