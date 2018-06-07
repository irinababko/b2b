
// var modal = document.getElementById('modal');
//
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

$(document).ready(function() {
    $("a.gallery").fancybox();
});

function openTab(evt, tabName) {

    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// document.getElementById("defaultOpen").click();

// $(document).ready(function() {
//
//     $('.icon-menu').click(function () {
//         $(this).toggleClass('menu-link_active');
//         // $('.menu__left').addClass('active');
//         $('.main__left').animate({
//             left: '0vw'
//         }, 200);
//
//         $('.icon-close').click(function() {
//         $('.main__left').animate({
//             left: '-100vw'
//         }, 200);
//     });
//     });
// })
//
// $('.icon-menu-1').click(function () {
//     $(this).toggleClass('menu-link-1_active');
//     // $('.menu__right').addClass('active');
//     $('.main__right').animate({
//         right: '0vw'
//     }, 200);
//     $('.icon-close-1').click(function() {
//         $('.main__right').animate({
//             right: '-100vw'
//         }, 200);
//     });
// });


var left = function() {

    $('.icon-menu').click(function() {
        $('.main__left').animate({
            left: '7vw'
        }, 200);
        // $('.icon-menu .icon').addClass('icon-active');
    });

    $('.icon-close').click(function() {
        $('.main__left').animate({
            left: '-94vw'
        }, 200);
    });

    // $('.icon-menu').click(function() {
    //     $('.icon-menu .icon').addClass('active');
    // });

};
var right = function () {
    $('.icon-menu-1').click(function() {
        $('.main__right').animate({
            left: '7vw'
        }, 200);
        // $('.main__right').animate({
        //     width: 'toggle'
        // })
        // $('.main__right').slideToggle('1000');
        // $('.main__right').toggleClass('active-menu');
    });

    $('.icon-close-1').click(function() {
        $('.main__right').animate({
            left: '-94vw'
        }, 200);
    });
};

var home = function () {
    $('.icon-menu-2').click(function() {
        $('.main__left').animate({
            left: '-94vw'
        }, 200);
        $('.main__right').animate({
            left: '-94vw'
        }, 200);

    });
}

$(document).ready(left);
$(document).ready(right);
$(document).ready(home);


var modal = document.getElementById('modal');
var btn = document.getElementById("btn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "flex";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function openModal() {
    document.getElementById('myModal').style.display = "flex";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    // var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
}

$(document).ready(function() {
    $("a.gallery").fancybox({
        openEffect	: 'elastic',
        closeEffect	: 'elastic'
    });
//
//     $(".fancybox").fancybox({
//         nextEffect  : 'fade',
//         prevEffect  : 'fade',
//         padding     : 0,
//         margin      : [15, 15, 40, 15],
//         afterLoad   : addLinks,
//         beforeClose : removeLinks,
//         helpers : {
//             buttons: {
//                 position : 'top'
//             }
//         }
//     });
//
//     function addLinks() {
//         var list = $("#links");
//
//         if (!list.length) {
//             list = $('<ul id="links">');
//
//             for (var i = 0; i < this.group.length; i++) {
//                 $('<li data-index="' + i + '"><label></label></li>').click(function() { $.fancybox.jumpto( $(this).data('index'));}).appendTo( list );
//             }
//
//             list.appendTo( 'body' );
//         }
//
//         list.find('li').removeClass('active').eq( this.index ).addClass('active');
//     }
//
//     function removeLinks() {
//         $("#links").remove();
//     }
//
});


var btn1 = document.getElementById('show');
var nav = document.getElementById('nav');

btn1.addEventListener('click', function() {
    nav.classList.toggle('active');
});



$(document).ready(function(){
    var pagebody = $("#pagebody");
    var themenu  = $("#navmenu");
    var topbar   = $("#toolbarnav");
    var content  = $("#content");
    var viewport = {
        width  : $(window).width(),
        height : $(window).height()
    };
    // retrieve variables as
    // viewport.width / viewport.height

    function openme() {
        $(function () {
            topbar.animate({
                left: "290px"
            }, { duration: 300, queue: false });
            pagebody.animate({
                left: "290px"
            }, { duration: 300, queue: false });
        });
    }

    function closeme() {
        var closeme = $(function() {
            topbar.animate({
                left: "0px"
            }, { duration: 180, queue: false });
            pagebody.animate({
                left: "0px"
            }, { duration: 180, queue: false });
        });
    }

    // checking whether to open or close nav menu
    $("#menu-btn").live("click", function(e){
        e.preventDefault();
        var leftval = pagebody.css('left');

        if(leftval == "0px") {
            openme();
        }
        else {
            closeme();
        }
    });

    // loading page content for navigation
    $("a.navlink").live("click", function(e){
        e.preventDefault();
        var linkurl     = $(this).attr("href");
        var linkhtmlurl = linkurl.substring(1, linkurl.length);

        var imgloader   = '<center style="margin-top: 30px;"><img src="img/preloader.gif" alt="loading..." /></center>';

        closeme();

        $(function() {
            topbar.css("top", "0px");
            window.scrollTo(0, 1);
        });

        content.html(imgloader);

        setTimeout(function() { content.load(linkhtmlurl, function() { /* no callback */ }) }, 1200);
    });
});

