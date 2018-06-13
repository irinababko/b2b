// var modal = document.getElementById('modal');
//
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }


// document.getElementById("defaultOpen").click();
// $(document).ready(function () {
//     $('.icon-menu .icon').click({
//         $(this).toggleClass('active');
//     });
// })
// $(document).ready(function () {
//     $('.icon-menu.icon').click(function () {
//         $('.active-icon').removeClass('active-icon');
//         $(this).toggleClass('active-icon');
//     });
// })

$(document).ready(function () {
    $('.icon-menu').click(function () {
        $('.main__left').toggleClass('main__left-active');
    });
    // $('.icon-close').click(function () {
    //     $('.main__left').toggleClass('main__left-active');
    // });

});
$(document).ready(function () {
    $('.icon-close').click(function () {
        $('.main__left').toggleClass('main__left-active');
    });
});

$(document).ready(function () {
    $('.icon-menu-1').click(function () {
        $('.main__right').toggleClass('main__right-active');
    });
    $('.icon-close-1').click(function () {
        $('.main__right').toggleClass('main__right-active');
    });

});

var slideIndex = 1;
$(document).ready(function () {
    var left = function () {

        // $('.icon-menu').click(function () {
        //     $('.main__left').animate({
        //         left: '10vw'
        //     }, 200);
        // });

        // $('.icon-close').click(function () {
        //     $('.main__left').animate({
        //         left: '-100vw'
        //     }, 200);
        // });

    };
    var right = function () {
        // $('.icon-menu-1').click(function () {
        //     $('.main__right').animate({
        //         left: '10vw'
        //     }, 200);
        // });
        //
        // $('.icon-close-1').click(function () {
        //     $('.main__right').animate({
        //         left: '-100vw'
        //     }, 200);
        // });
    };

    // $(document).ready(left);
    // $(document).ready(right);




    const modal = document.getElementById('modal');
    const modal2 = document.getElementById('modal-2');
    const btn = document.getElementById("btn");
    const btn2 = document.getElementById("btn-2");
    const span = document.getElementsByClassName("close")[0];
    const span2 = document.getElementsByClassName("close-2")[0];

    btn.onclick = function () {
        modal.style.display = "flex";
    };
    span.onclick = function () {
        modal.style.display = "none";
    };
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    btn2.onclick = function () {
        modal2.style.display = "flex";
    };
    span2.onclick = function () {
        modal2.style.display = "none";
    };
    window.onclick = function (event) {
        if (event.target === modal2) {
            modal2.style.display = "none";
        }
    };


    showSlides(slideIndex);



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


    $('.tablinks').on('click', function () {

        const tabcontent = document.getElementsByClassName("tabcontent");
        for (var i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        const tablinks = document.getElementsByClassName("tablinks");
        for (var i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        $('#' + $(this).attr('data-tab-id')).show();
        // document.getElementById(tabName).style.display = "block";
        // evt.currentTarget.className += " active";
        $(this).addClass('active');
    })
});

function openModal() {
    document.getElementById('myModal').style.display = "flex";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}
function openTab(evt, tabName) {
    var i;
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    const tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    // const captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

$(document).ready(function(){
    $('.th-title').click(function () {
        $('.active').removeClass('active');
        $(this).toggleClass('active');
    })

    // $('.title-block-2').click(function () {
    //     $('.title-block-2').removeClass('active');
    //     $(this).addClass('active');
    // })
    $('.title-block-2 a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if(location === link) {
            $(this).addClass('active');
        }
    });

    $(function () {
        var location = window.location.href;
        var cur_url = '/' + location.split('/').pop();

        $('.title-block-2').each(function () {
            var link = $(this).find('a').attr('href');

            if (cur_url == link)
            {
                $(this).addClass('active');
            }
        });
    });


    $('.madein').click(function (event) {

        $(this).children('li').addClass('active');
        $('.madein.active').removeClass('active');
        event.stopPropagation();


        // $(".dropdown a").on('click', function() {
        //     $(".dropdown ul").slideToggle('fast');
        // });
    });
    // $('.madein>li').click(function () {
    //     $(this).children('li>label').show();
    // })
    function Open(id) {
        var list = document.getElementById('list_' + id).style;

        if (list.display == 'none') {
            list.display = 'block';
        }
        else {
            list.display = 'none';
        }
    }

    $('.accordion').click(function () {
        $(this).toggleClass('active');
        $('.panel').toggleClass('active');
    })

});


//*accordion*//
// var acc = document.getElementsByClassName("accordion");
//
// for (var i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function() {
//         this.classList.toggle("active");
//         var panel = this.nextElementSibling;
//         if (panel.style.maxHeight){
//             panel.style.maxHeight = null;
//         } else {
//             panel.style.maxHeight = panel.scrollHeight + "px";
//         }
//     });
// }


$(document).ready(function() {
    $("a.gallery").fancybox({
        helpers	: {
            title	: {
                type: 'outside'
            },
            thumbs	: {
                width	: 50,
                height	: 50
            }
        }
    });

// $(".fancybox").fancybox({
//     nextEffect  : 'fade',
//     prevEffect  : 'fade',
//     padding     : 0,
//     margin      : [15, 15, 40, 15],
//     afterLoad   : addLinks,
//     beforeClose : removeLinks,
//     helpers : {
//         buttons: {
//             position : 'top'
//                      }
//         }
// });
//
// function addLinks() {
//     var list = $("#links");
//
//     if (!list.length) {
//         list = $('<ul id="links">');
//
//         for (var i = 0; i < this.group.length; i++) {
//             $('<li data-index="' + i + '"><label></label></li>').click(function() { $.fancybox.jumpto( $(this).data('index'));}).appendTo( list );
//         }
//
//         list.appendTo( 'body' );
//     }
//
//     list.find('li').removeClass('active').eq( this.index ).addClass('active');
// }
//
// function removeLinks() {
//     $("#links").remove();
// }

});

$(function(){
    var wrapper = $( ".file_upload" ),
        inp = wrapper.find( "input" ),
        btn = wrapper.find( ".button" ),
        lbl = wrapper.find( "mark" );

    // Crutches for the :focus style:
    inp.focus(function(){
        wrapper.addClass( "focus" );
    }).blur(function(){
        wrapper.removeClass( "focus" );
    });

    var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

    inp.change(function(){
        var file_name;
        if( file_api && inp[ 0 ].files[ 0 ] )
            file_name = inp[ 0 ].files[ 0 ].name;
        else
            file_name = inp.val().replace( "C:\\fakepath\\", '' );

        if( ! file_name.length )
            return;

        if( lbl.is( ":visible" ) ){
            lbl.text( file_name );
            btn.text( "Выбрать" );
        }else
            btn.text( file_name );
    }).change();

});
$( window ).resize(function(){
    $( ".file_upload input" ).triggerHandler( "change" );
});


$(document).ready(function() {
    $(".fancybox-thumb").fancybox({
        helpers	: {
            title	: {
                type: 'outside'
            },
            thumbs	: {
                width	: 50,
                height	: 50
            },
            openEffect	: 'elastic',
            closeEffect	: 'elastic',
            slideShow  : true,
            fullScreen : true,
            closeBtn   : true
        }
    });
});





