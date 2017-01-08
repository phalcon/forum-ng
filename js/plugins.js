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
        // ================================================================================
        // Scroll to top
        // ================================================================================

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

        // ================================================================================
        // Toggle sidebar
        // ================================================================================

        var $toggleSidebarEl  = $('.toggle-sidebar'),
            $contentBodyEl    = $('.content-body'),
            $contentSidebarEl = $('.content-sidebar');

        $toggleSidebarEl.on('click', function () {
            if ($(this).hasClass('active')) {
                $toggleSidebarEl.removeClass('active');
                $contentBodyEl.add($contentSidebarEl).removeClass('expended');
                $contentSidebarEl.delay(300).fadeIn('slow');
            } else {
                $toggleSidebarEl.addClass('active');

                $contentSidebarEl.fadeOut('slow', function () {
                    $contentBodyEl.add($contentSidebarEl).addClass('expended');
                });
            }
        });

        // ================================================================================
        // Toggle content
        // ================================================================================

        var $toggleContentBtn = $('.content-toggle');

        $toggleContentBtn.on('click', function () {
            var $t        = $(this),
                $toggleEl = $t.parent('.content-list-header').siblings('.content-list-content');

            if ($toggleEl.height() === 0) {
                $t.removeClass('toggled');
                $toggleEl.animate({ height: $toggleEl.data('old-height') }, 500).removeAttr('data-old-height');
            } else {
                $t.addClass('toggled');
                //noinspection JSValidateTypes
                $toggleEl.attr('data-old-height', $toggleEl.outerHeight()).animate({ height: '0' }, 500);
            }
        });

        $(window).on('scroll', function () {
            scrollToTop.show();
        });
    });
})(jQuery);
