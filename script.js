var sobremi = document.getElementById('info');
var afectar = document.getElementById('img-caja');
var conte = document.getElementById('img-contenedor');

$(document).ready(function() {
   

    $('#Staff').click(function(){ 
        $('.center2').css('width','100%');
        $('.center2').css('display','flex');
        $('.center2').css('left','0');
        console.log("Holis")
    });

    $('#Cerrar').click(function(){ 
        $('.center2').css('width','0%');
        $('.center2').css('display','none');
        $('.center2').css('left','-100%');
        console.log("Holis")
    });

    $('#Cerrar2').click(function(){ 
        $('.center2').css('width','0%');
        $('.center2').css('display','none');
        $('.center2').css('left','-100%');
        console.log("Holis")
    });
    $('#Cerrar3').click(function(){ 
        $('.center2').css('width','0%');
        $('.center2').css('display','none');
        $('.center2').css('left','-100%');
        console.log("Holis")
    });
    $('#Cerrar4').click(function(){ 
        $('.center2').css('width','0%');
        $('.center2').css('display','none');
        $('.center2').css('left','-100%');
        console.log("Holis")
    });
    $('#info').click(function(){ 
        window.open('doctors.html', '_self')
    });
    $('#info2').click(function(){ 
        window.open('patients.html', '_self')
    });

    $('#info').hover(function(){ 
            $('#circulito').css('background','#07CCEC');
            $('#img-caja').css('border-radius','10px');
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

$('#boton_cerrar').on('click',function(ev){
    sidebar.classList.remove('hide');
    $('#nav').css('position','absolute');
    $('.center').css('width','0%');
})
    const sidebar= document.getElementById('dashboard');
    document.getElementById("Circulo3").addEventListener('click', function(){
        sidebar.classList.toggle('hide');
        $('#nav').css('position','fixed');
        $('.center').css('width','100%');
    })


    
});


