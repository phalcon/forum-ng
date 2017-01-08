// Google Analytics: change UA-XXXXX-X to be your site's ID.

var id  = 'UA-XXXXX-X',
    uri = 'https://www.google-analytics.com/analytics.js';

(function (b,o,i,l,e,r) {
    b.GoogleAnalyticsObject = l;

    b[l] || (b[l]=
        function() {
            (b[l].q = b[l].q || []).push(arguments)
        }
    );

    b[l].l =+ new Date;

    e = o.createElement(i);
    r = o.getElementsByTagName(i)[0];
    e.src = uri;
    r.parentNode.insertBefore(e ,r)
}(window, document, 'script', 'ga'));

// Track jQuery AJAX requests in Google Analytics
if (typeof ga !== "undefined" && ga !== null && id !== "UA-XXXXX-X") {
    ga('create', id, 'auto');
    ga('send', 'pageview');

    $(document).ajaxSend(function(event, xhr, settings){
        ga('send', 'pageview', settings.url);
    });
}
