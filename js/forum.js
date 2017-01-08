(function ($) {
    "use strict";

    $(document).ready(function () {
        //noinspection JSValidateTypes
        var $wn               = $(window),
            selectedClass     = 'selected',
            $headerEl         = $('#header'),
            $headerToolbar    = $('#header-toolbar'),
            $headerNavEl      = $('.header-toolbar-nav'),
            headerH           = $headerEl.outerHeight(),
            $headerNavLinks   = $('.header-toolbar-nav [data-toggle="tab"]'),
            $headerNavTab     = $('.header-toolbar-nav-tab'),
            $headerNavTabPane = $('.header-toolbar-nav-tab-pane'),
            headerNavTabPaneH = $headerNavTabPane.outerHeight();

        $headerNavEl.sticky();

        $headerNavLinks.on('click', function () {
            var $t          = $(this),
                $tp         = $t.parent('li'),
                curHref     = $t.attr('href'),
                $targetEl   = $(curHref);

            if ($tp.hasClass(selectedClass)) {
                $tp.removeClass(selectedClass);

                $targetEl.slideUp();

                //noinspection JSValidateTypes
                $headerToolbar.css('height', ($headerNavEl.outerHeight() - $headerNavTab.outerHeight()));
            } else {
                $tp.siblings().removeClass(selectedClass);
                $tp.addClass(selectedClass);

                $targetEl.siblings().slideUp();
                $targetEl.slideDown();

                if (!$headerToolbar.hasClass('is-sticky')) {
                    //noinspection JSValidateTypes
                    $headerToolbar.css('height', ($headerNavEl.outerHeight() + headerNavTabPaneH));
                }
            }
        });

        var $toggleSidebarEl  = $('.toggle-sidebar'),
            $contentBodyEl    = $('.content--body'),
            $contentSidebarEl = $('.content-sidebar');

        $toggleSidebarEl.on('click', function () {
            var $t = $(this);

            if ($t.hasClass('active')) {
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

        var $topicToggleBtn = $('.content-list-header-toggle-btn');

        $topicToggleBtn.on('click', function () {
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

        var backToTop = {
            $el: $('.back-top'),
            $btn: $('.back-top button'),
            show: function () {
                //noinspection JSValidateTypes
                return ($(window).scrollTop() > 1) ? backToTop.$el.addClass('show') : backToTop.$el.removeClass('show');
            }
        };

        backToTop.show();

        backToTop.$btn.on('click', function() {
            $("html, body").animate({scrollTop: 0}, 500);
        });

        $(window).on('scroll', function () {
            backToTop.show();
        });
    });
})(jQuery);
