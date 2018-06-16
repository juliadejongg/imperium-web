$(function () {

    // PSUEDO - CODE.
    //Als i groter is dan het aantal 'figures'
    //      Dan, voeg er 1 bij 'i' toe
    //          Dan, zoek alle figures
    //              zoek figure op plek nummer 'i', 
    //                  voeg op deze figure  de css 'z-index' toe van 
    //                  het aantal 'figures' minus 'i'
    // WAAROM? Zodat de afbeeldingen op volgorde zullen staan en niet gaan glitchen
    for (var i = 0; i < $('figure').length; i++) {
        $('figure').eq(i).css('z-index', $('figure').length - i);
    }

    // Als er op next wordt gedrukt
    $('.next').on('click', function () {
        // We zoeken naar het huidige actieve afbeelding
        var active = $('.active');
        // We zoeken in de huidige actieve afbeeldingen het 'volgende' element.
        var next = active.next();

        // Als het volgende element een 'figure' is
        if (next.is('figure')) {
            // Laten we die actief maken, want er is op Next gedrukt.
            // Eerst actieve class toevoegen.
            next.addClass('active');
            // Daarna 
            active.fadeOut(1000).removeClass('active');
        } else { // Als het volgende element geen figure is, dan moeten we terug naar de eerste figure.
            var next = $('figure').first();
            $('figure').fadeIn(1000); // Alle figures weer zichtbaar maken
            next.addClass('active');
            active.removeClass('active');
        }
    });


    // Als er op terug wordt gedrukt
    $('.prev').on('click', function () {
        // Zoeken naar 'active' figure
        var active = $('.active');
        //  Zoeken naar figure die daarvoor staat.
        var prev = active.prev();

        if (prev.is('figure')) { // Als vorige een figure is, dan...
            prev.addClass('active').fadeIn(1000);
            active.removeClass('active');
        } else { // Zo niet, ga terug naar de laatste 
            var prev = $('figure').last(); //laatste figure selecteren
            prev.addClass('active').fadeIn(1000); // actief maken en infaden
            $('figure:not(:last):not(:first)').fadeOut(); // de rest uitfaden
            active.fadeOut(1000); // deze uitfaden
            active.removeClass('active');
        }
    });
});