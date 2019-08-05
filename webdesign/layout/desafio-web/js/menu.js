jQuery(function() {
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 300) {
            $(".menu-initial").addClass("menu-half")
        } else {
            $(".menu-initial").removeClass("menu-half")
        }
    });
});