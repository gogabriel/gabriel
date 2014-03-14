/*

* Juego de memoria 

* Autor: juan gabriel gonzales yauris
*        fernando farfan salazar
*/


var iTiempo=iPuntos=0, 
    iTiempoLimite=60, 
    objPrimero;

var blnJuegoF=false;



$(document).ready(function(){


var strCuadros=[1,2,3], iIteraciones=4;
var strCuadros2=[1,2,3,4], iIteraciones=4;

//evento al hacer clic en la lista

$('ul li').live('click',function(){

if(!blnJuegoF && $(this).css('opacity')!=0){

var strImagen='img/image/'+$(this).attr('rel')+'.jpg';

if(objPrimero==undefined){

objPrimero=$(this);

objPrimero.stop(true,true).animate({opacity:.9}).css('background-image','url('+strImagen+')');

}else{

var objSegundo=$(this);

objSegundo.stop(true,true).animate({opacity:.9}).css('background-image','url('+strImagen+')');



//par no seleccionar dos veces

if(objPrimero.index()!=objSegundo.index()){

//los dos elementos coinciden

if(objPrimero.attr('rel')==objSegundo.attr('rel')){
iPuntos++;

//ocultamos los dos iguales

$(objPrimero).stop(true,true).animate({opacity: 1}).delay(700).animate({opacity: 0});

$(objSegundo).stop(true,true).animate({opacity: 1}).delay(700).animate({opacity: 0});

//finalizamos el juego

if(iPuntos==$('ul li').length/2) $.fntFinalizarJuego();

}else{


//barramos lo seleccionado

$(objPrimero).stop(true,true).animate({opacity: 1},1000,function(){$(this).css('background-image','none');});

$(objSegundo).stop(true,true).animate({opacity: 1},1000,function(){$(this).css('background-image','none');});

}

}else{



$(this).stop(true,true).animate({opacity: 1},1000,function(){$(this).html('&nbsp;');});

}

//limpiamos la variable seleccionada

objPrimero=undefined;

}

}else{



}

});



//funcion para el tiempo

$.fntTiempo=function(){

if(!blnJuegoF){

if(iTiempo>=iTiempoLimite){



$.fntFinalizarJuego();

}else{

setTimeout('$.fntTiempo()',1000);



$('#divContador').find('p').html('<strong>Puntos obtenidos: </strong>'+iPuntos+

' &bull; <strong>Tiempo que falta: </strong>'+(iTiempoLimite-iTiempo)+' segundos');

//aumentamos el contador de tiempo transcurido

iTiempo++;

}

}

};



//funcion para finalizar 

$.fntFinalizarJuego=function(){

$('#divContenedor ul').html('');

//finalizar el juego

blnJuegoF=true;

//mostrar el estado final

$('#divContador').find('p').html('<strong>Puntuacion: </strong>'+iPuntos+

' &bull; <strong>Tiempo realizado: </strong>'+iTiempo+' segundos');

//mostramos la capa inicial

$('#divInicio').stop(true,true).fadeIn(1500,function(){

$('ul li').stop(true,true).css('opacity',1).html('&nbsp;');

});

};



//////////////////facil/////////////////

$.fntFacil=function(){

//mostramos el estado del juego

$('#divContador').find('p').html('Cargando...');

//creamos la cuadricula

for(var iCont=0;iCont<iIteraciones;iCont++){

//desordenamos el array

strCuadros=strCuadros.sort(function(){

return Math.random() - 0.5

});

//agregamos los items a la lista (inicialmente vacios)

for(var iCuadros=0;iCuadros<strCuadros.length;iCuadros++){

$('#divContenedor ul').append('<li rel="'+strCuadros[iCuadros]+'">&nbsp;</li>');
}

}

//reseteamos todas las variables globales

iTiempo=iPuntos=0, objPrimero=undefined;

//ocultamos la capa inicial

$('#divInicio').stop(true,true).fadeOut(1500,function(){

//iniciamos el conteo de tiempo

blnJuegoF=false;

$.fntTiempo();

});

};

/////////////////medio//////////////////

//funcion para iniciar el juego

$.fntMedio=function(){

//mostramos el estado del juego

$('#divContador').find('p').html('Cargando...');

//creamos la cuadricula

for(var iCont=0;iCont<iIteraciones;iCont++){

//desordenamos el array

strCuadros2=strCuadros2.sort(function(){

return Math.random() - 0.5

});

//agregamos los items a la lista (inicialmente vacios)

for(var iCuadros=0;iCuadros<strCuadros2.length;iCuadros++){

$('#divContenedor ul').append('<li rel="'+strCuadros2[iCuadros]+'">&nbsp;</li>');

}

}

//reseteamos todas las variables globales

iTiempo=iPuntos=0, objPrimero=undefined;

//ocultamos la capa inicial

$('#divInicio').stop(true,true).fadeOut(1500,function(){

//iniciamos el conteo de tiempo

blnJuegoF=false;

$.fntTiempo();

});

};

//////////////////////////////////////

//clic en el boton jugar facil

$('#btnJugar').on('click',function(){

//iniciamos el juego

$.fntFacil();

});
//clic en el boton jugar medio

$('#btnJugar2').on('click',function(){

//iniciamos el juego

$.fntMedio();

});




});