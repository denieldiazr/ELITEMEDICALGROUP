var sobremi = document.getElementById('info');
var afectar = document.getElementById('img-caja');
var conte = document.getElementById('img-contenedor');

$(document).ready(function() {
    $('#info').hover(function(){ 
            $('#circulito').css('background','#07CCEC');
            $('#img-caja').css('border-radius','10px');
            $('#img-caja').css('mix-blend-mode','screen');
            $('#img-contenedor').css('background-position','100% 100%');
    },function(){ 
        $('#circulito').css('background','#27477D');
        $('#img-caja').css('border-radius','10px');
        $('#img-contenedor').css('background-position','0% 0%');
    });

    $('#info2').hover(function(){ 
        $('#circulito2').css('background','#07CCEC');
        $('#img-contenedor2').css('background-position','100% 100%');
    },function(){ 
        $('#circulito2').css('background','#27477D');
        $('#img-contenedor2').css('background-position','0% 0%');
    });

    $('#info3').hover(function(){ 
        $('#circulito3').css('background','#07CCEC');
        $('#img-contenedor3').css('background-position','100% 100%');
    },function(){ 
        $('#circulito3').css('background','#27477D');
        $('#img-contenedor3').css('background-position','0% 0%');
    });


    $('#info5').hover(function(){ 
        $('#circulito5').css('background','#07CCEC');
        $('#img-contenedor5').css('background-position','100% 100%');
    },function(){ 
        $('#circulito5').css('background','#27477D');
        $('#img-contenedor5').css('background-position','0% 0%');
    });

    $('#info6').hover(function(){ 
        $('#circulito6').css('background','#07CCEC');
        $('#img-contenedor6').css('background-position','100% 100%');
    },function(){ 
        $('#circulito6').css('background','#27477D');
        $('#img-contenedor6').css('background-position','0% 0%');
    });
    
    $('#info7').hover(function(){ 
        $('#circulito7').css('background','#07CCEC');
        $('#img-contenedor7').css('background-position','100% 100%');
    },function(){ 
        $('#circulito7').css('background','#27477D');
        $('#img-contenedor7').css('background-position','0% 0%');
    });
    
    $('#info8').hover(function(){ 
        $('#circulito8').css('background','#07CCEC');
        $('#img-contenedor8').css('background-position','100% 100%');
    },function(){ 
        $('#circulito8').css('background','#27477D');
        $('#img-contenedor8').css('background-position','0% 0%');
    });
    
    $('#info9').hover(function(){ 
        $('#circulito9').css('background','#07CCEC');
        $('#img-contenedor9').css('background-position','100% 100%');
    },function(){ 
        $('#circulito9').css('background','#27477D');
        $('#img-contenedor9').css('background-position','0% 0%');
    });
    
    $('#info10').hover(function(){ 
        $('#circulito10').css('background','#07CCEC');
        $('#img-contenedor10').css('background-position','100% 100%');
    },function(){ 
        $('#circulito10').css('background','#27477D');
        $('#img-contenedor10').css('background-position','0% 0%');
    });
    
    $('#info11').hover(function(){ 
        $('#circulito11').css('background','#07CCEC');
        $('#img-contenedor11').css('background-position','100% 100%');
    },function(){ 
        $('#circulito11').css('background','#27477D');
        $('#img-contenedor11').css('background-position','0% 0%');
    });
    
    $('#info12').hover(function(){ 
        $('#circulito12').css('background','#07CCEC');
        $('#img-contenedor12').css('background-position','100% 100%');
    },function(){ 
        $('#circulito12').css('background','#27477D');
        $('#img-contenedor12').css('background-position','0% 0%');
    });
    
    $('#info13').hover(function(){ 
        $('#circulito13').css('background','#07CCEC');
        $('#img-contenedor13').css('background-position','100% 100%');
    },function(){ 
        $('#circulito13').css('background','#27477D');
        $('#img-contenedor13').css('background-position','0% 0%');
    });
    

});

$(document).ready(function () {
    $('.pestas').on('click', '.pesta1', function (ev) {
        $('.first').toggleClass('animate');
        $('.second').toggleClass('animate');
        $('.pesta1').css('background','#27477D');
        $('.pesta2').css('background','#87efff');

        $('#numberphone').text('(407) 201-2576')
        $('#Number2').text('patientsinfo.elite@gmail.com')
    }).on('click', '.pesta2', function (ev) {
        $('.second').toggleClass('animate');
        $('.first').toggleClass('animate');
        $('.pesta1').css('background','#b0c6eb');
        $('.pesta2').css('background','#07CCEC');
        $('#numberphone').text('(904) 861-8244')
        $('#Number2').text('providers.elite.medical@gmail.com')
    });


    const sidebar= document.getElementById('dashboard');
    document.getElementById("Circulo3").addEventListener('click', function(){
        sidebar.classList.toggle('hide');
        $('#nav').css('position','fixed');
        $('.center').css('width','100%');
    })

$('#boton_cerrar').on('click',function(ev){
    sidebar.classList.remove('hide');
    $('#nav').css('position','absolute');
    $('.center').css('width','0%');
})
    
});


