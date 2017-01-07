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
    });
})(jQuery);
