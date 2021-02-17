$(document).ready(function () {
    $(window).trigger('resize');
});


$(window).resize(function () {
    var height = $("#logo-footer").height();
    height = (height / 2)
    $(".logo-footer-section").css('top', '-' + height + 'px')
});
