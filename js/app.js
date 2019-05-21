function sizes() {
    $("#docs-anchor").width(($("#docs-item-content").width() / 3));
}

function materialInit() {
    //init materialize stuff

    // new
    M.AutoInit()
    $('#slide-out').sidenav();

    // // old
    // $('.button-collapse').sideNav({closeOnClick: true});
    // $('#docs-anchor').pushpin({
    // 	top: 124,
    // 	offset: 64
    // });
    // $('.collapsible').collapsible({
    // 	accordion : true
    // });
    // // Set element sizes
    sizes();
};

$(document).ready(function () {
    materialInit();
    $("#preloader").fadeOut(600).hide();
});

$(window).resize(function () {
    sizes();
});


// Page changing
function getLocation() {
    return location.pathname + location.search;
}

var currentLocation = getLocation();

//Function
function changePage(href) {
    $("#preloader").show();
    $('#page-body').load(href + " #page-body-inner", function () {

        // Re activate plugins
        materialInit()

        // Ditch loader and show page
        $("#preloader").hide();

    });
    currentLocation = getLocation();
}
// Link click
$(document).on("click", ".internal-link", function (e) {
    if (typeof (window.history.pushState) === typeof (Function)) {
        $("#preloader").show();
        e.preventDefault();
        var href = $(this).attr("href");
        history.pushState(null, null, href);
        //changePage(href);

        changePage(href)
        /*
        $("#page-body").load( href + " #page-body-inner",function(){
            $("#loader").hide();
        });*/
    }
});

// Browser back button
window.onpopstate = function (e) {
    var newLocation = getLocation();
    if (newLocation != currentLocation) {
        // changePage("http://irontiga.io" + location.pathname);
        changePage(window.location.origin + location.pathname);
    }
};