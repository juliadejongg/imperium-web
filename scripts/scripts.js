// Placeholder script

/**
 * Tab actief maken in het inschrijfformulier
 * 
 * @param {string} name 
 */
function makeTabActive(name) {
	// Alle actieve tabs verwijderen in de stappen lijst menu
	$('#stappen li').removeClass('active');
	// Naam tab langzaam in laten komen
	$(`#${name}`).fadeIn();
	// Tab actief maken
	$(`a[href='#${name}']`).parent().addClass('active');
}

// Codes inladen zodra het document klaar is met laden

$(document).ready(function() {
	// Voorkomen dat de linkjes daadwerkelijk bewegen naar de index toe. Bijv: #contactgegevens
	$('#stappen a').click(function (event) { event.preventDefault() });

	// Behandelen van persoonsgegevens sectie na het drukken op volgende
	$('#persoonsgegevens').submit(function (event) {
		// Langzaam verbergen
		$('#persoonsgegevens').fadeOut('fast', function () {
			// Volgende tab actief maken
			makeTabActive('contactgegevens');
		});
		// Standaard actie van event voorkomen
		event.preventDefault();
	});

	// Behandelen van contactgegevens sectie na het drukken op volgende
	$('#contactgegevens').submit(function (event) {
		// Langzaam verbergen
		$('#contactgegevens').fadeOut('fast', function () {
			// Volgende tab actief maken
			makeTabActive('ondersteunend-commissiewerk');
		});
		// Standaard actie van event voorkomen
		event.preventDefault();
	});

	// Behandelen van ondersteunend commisiewerk tab
	$('#ondersteunend-commissiewerk').submit(function (event) {
		// Langzaam verbergen
		$('#ondersteunend-commissiewerk').fadeOut('fast', function () {
			// Volgende tab actief maken
			makeTabActive('interesses-opmerkingen');
		});
		// Standaard actie van event voorkomen
		event.preventDefault();
	});

	// Laatste stap, interesses en opmerken verwerken en alert laten zien dat we klaar zijn.
	$('#interesses-opmerkingen').submit(function (event) {
		// Eerste naam uit formulier ophalen
		const firstName = $('input[name=firstname]').val();
		// Bericht laten zien met naam erin
		alert(`Bedankt ${firstName} voor jouw toezending!\n\nWij zullen zo snel mogelijk reageren en dan zullen we je uitnodigen voor de eerstkomende auditieavond. De audities zijn meestal in september, november, januari en juni.`);
		// Verplaatsen naar hoofdpagina
		window.location = '../index.html';
		// Standaard actie van event voorkomen
		event.preventDefault();
	});

	// Terug knop naar persoonsgegevens
	$('#back-persoonsgegevens').click(function (event) {
		// Langzaam verbergen
		$('#contactgegevens').fadeOut('fast', function () {
			// Persoonsgegevens actief maken
			makeTabActive('persoonsgegevens');
		});
	});

	// Terug knop naar contactgegevens
	$('#back-contactgegevens').click(function (event) {
		// Langzaam verbergen
		$('.ondersteunend-commissiewerk').fadeOut('fast', function () {
			// Persoonsgegevens actief maken
			makeTabActive('contactgegevens');
		});
	});

	// Terug knop naar contactgegevens
	$('#back-ondersteunend-commissiewerk').click(function () {
		// Langzaam verbergen
		$('#interesses-opmerkingen').fadeOut('fast', function () {
			// Persoonsgegevens actief maken
			makeTabActive('ondersteunend-commissiewerk');
		});
	});
});
