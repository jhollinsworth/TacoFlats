  

// CAROUSEL

          $(document).ready(function() {
           
            $("#image-container").owlCarousel({
           
                navigation:true, // Show next and prev buttons
                slideSpeed:300,
                paginationSpeed:1600,
                singleItem:true,
                autoPlay:true,
                pagination:false,
                navigationText:["<",">"]
           
            });
           
          });


// PRE-LOADER

          $(window).load(function() { // makes sure the whole site is loaded
                $('#status').fadeOut(); // will first fade out the loading animation
                $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
                $('body').delay(350).css({'overflow':'visible'});
            });


// MENU SHOW/HIDE

          $(document).ready(function() {
                $("#food, #cocktails").click(function() {
                    $(".beer-menu").css("display", "none");
                });
                $("#beer, #food").click(function() {
                    $(".cocktail-menu").css("display", "none");
                })
                $("#beer, #cocktails").click(function() {
                    $(".food-menu").css("display", "none");
                })
                $("#beer").click(function() {
                    $(".beer-menu").css("display", "block");
                })
                $("#food").click(function() {
                    $(".food-menu").css("display", "block");
                })
                $("#cocktails").click(function() {
                    $(".cocktail-menu").css("display", "block");
                })
          });


// FOOTER LINKS HOVER

          $(document).ready(function() {
                $("#Dillo").hover(function() {
                    $(this).attr("src", function(index, attr){
                        return attr.replace("images/Armadillo-logo_sm_blue.png", "images/Armadillo-logo_sm_red.png");
                    });
                }, function (){
                    $(this).attr("src", function(index, attr){
                        return attr.replace("images/Armadillo-logo_sm_red.png", "images/Armadillo-logo_sm_blue.png");
                    });
                });
                $("#FB").hover(function() {
                    $(this).attr("src", function(index, attr){
                        return attr.replace("images/Facebook_34_blue.png", "images/Facebook_34_red.png");
                    });
                }, function (){
                    $(this).attr("src", function(index, attr){
                        return attr.replace("images/Facebook_34_red.png", "images/Facebook_34_blue.png");
                    });
                });
                $("#TWT").hover(function() {
                    $(this).attr("src", function(index, attr){
                        return attr.replace("images/Twitter_34_blue.png", "images/Twitter_34_red.png");
                    });
                }, function (){
                    $(this).attr("src", function(index, attr){
                        return attr.replace("images/Twitter_34_red.png", "images/Twitter_34_blue.png");
                    });
                });
                $("#INST").hover(function() {
                    $(this).attr("src", function(index, attr){
                        return attr.replace("images/Instagram_34_blue.png", "images/Instagram_34_red.png");
                    });
                }, function (){
                    $(this).attr("src", function(index, attr){
                        return attr.replace("images/Instagram_34_red.png", "images/Instagram_34_blue.png");
                    });
                });
                $("#design").hover(function() {
                    $(this).attr("src", function(index, attr){
                        return attr.replace("images/Design_link_blue.png", "images/Design_link_red.png");
                    });
                }, function (){
                    $(this).attr("src", function(index, attr){
                        return attr.replace("images/Design_link_red.png", "images/Design_link_blue.png");
                    });
                });
            });
