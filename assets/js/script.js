

$(document).scroll(function() {
    const y = $("html").scrollTop();

    y > 150 ? $("nav").addClass ("navbar-opaco") : $("nav").removeClass("navbar-opaco")

})