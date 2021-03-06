// ================================================================================
// Avoid `console` errors in browsers that lack a console.
// ================================================================================

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
                $contentBodyEl.add($contentSidebarEl).removeClass('full-size');
                $contentSidebarEl.delay(300).fadeIn('slow');
            } else {
                $toggleSidebarEl.addClass('active');

                $contentSidebarEl.fadeOut('slow', function () {
                    $contentBodyEl.add($contentSidebarEl).addClass('full-size');
                });
            }
        });

        // ================================================================================
        // Toggle content
        // ================================================================================

        var $toggleContentBtn = $('.content-toggle');

        $toggleContentBtn.on('click', function () {
            var $t        = $(this),
                $toggleEl = $t.parent('.content-list-header').siblings('.content-wrapper');

            if ($toggleEl.height() === 0) {
                $t.removeClass('toggled');
                $toggleEl.animate({ height: $toggleEl.data('old-height') }, 500).removeAttr('data-old-height');
            } else {
                $t.addClass('toggled');
                //noinspection JSValidateTypes
                $toggleEl.attr('data-old-height', $toggleEl.outerHeight()).animate({ height: '0' }, 500);
            }
        });

        // Sticky Wrapper

        var $headerNavEl      = $('.header-toolbar-nav'),
            $headerNavTab     = $('.header-toolbar-nav-tab'),
            $headerNavLinks   = $('.header-toolbar-nav [data-toggle="tab"]'),
            $headerNavTabPane = $('.header-toolbar-nav-tab-pane'),
            headerNavTabPaneH = $headerNavTabPane.outerHeight();

        $headerNavEl.sticky();

        $headerNavLinks.on('click', function () {
            var $tp       = $(this).parent('li'),
                curHref   = $(this).attr('href'),
                $targetEl = $(curHref),
                height;

            if ($tp.hasClass('selected')) {
                $tp.removeClass('selected');

                $targetEl.slideUp();

                height = $headerNavEl.outerHeight() - $headerNavTab.outerHeight();
                $('#sticky-wrapper').css('height', height);
            } else {
                $tp.siblings().removeClass('selected');
                $tp.addClass('selected');

                $targetEl.siblings().slideUp();
                $targetEl.slideDown();

                if (!$('#sticky-wrapper').hasClass('is-sticky')) {
                    height = $headerNavEl.outerHeight() + headerNavTabPaneH;

                    $('#sticky-wrapper').css('height', height);
                }
            }
        });

        $(window).on('scroll', function () {
            scrollToTop.show();
        });
    });
})(jQuery);
