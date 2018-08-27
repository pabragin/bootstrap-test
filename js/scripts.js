$(document).ready(function(){
    var $reserveTableButton = $("#reserveTableButton"),
        $loginButton = $('#loginButton'),
        $loginModal = $('#loginModal'),
        $reserveTable = $('#reserveTable');

    $reserveTableButton.click(function(){
        $reserveTable.modal('toggle')
    });

    $loginButton.click(function(){
        $loginModal.modal('toggle')
    });


    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });
});