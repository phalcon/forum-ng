// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

(function ($) {
    "use strict";

    $(document).ready(function () {
        var scrollToTop = {
            $el: $('.scroll-to-top'),
            $btn: $('.scroll-to-top button'),
            show: function () {
                //noinspection JSValidateTypes
                return ($(window).scrollTop() > 1) ? scrollToTop.$el.addClass('show') : scrollToTop.$el.removeClass('show');
            }
        };

        scrollToTop.show();

        scrollToTop.$btn.on('click', function() {
            $("html, body").animate({scrollTop: 0}, 500);
        });

        $(window).on('scroll', function () {
            scrollToTop.show();
        });
    });
})(jQuery);
