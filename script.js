$(function(){
//------------EXO 1-----------------//
  var i=0;

  $("#bouton").click(function(){
    i=i+1;
    $("#return").text(i);
  });

//------------EXO 2----------------//

var i=0;

  $("#bouton1").click(function(){
    i=i+1;
    $("#return2").text(i);
  });
  $("#bouton2").click(function(){
    i=i-1;
    $("#return2").text(i);
  });

$("#return").text(i);

//------------EXO 3-----------------//

var tailleorigin = 10;
var taille = 10;
var taillemax = 100;

$("#bouton3").click(function(){

  taille= taille+10;
  $("#rectangle").css({"height": taille+"px"});
  if(taille >= taillemax){
    $("#rectangle").css({"height": tailleorigin+"px"});
    }
  });

$("#bouton4").click(function(){
  $("#rectangle").css({"background-color": "green"});
  });

$("#bouton5").click(function(){
  $("#rectangle").css({"background-color": "yellow"});
  });

$("#bouton6").click(function(){
  $("#rectangle").hide();
  });

$("#bouton7").click(function(){
  $("#rectangle").show();
  });

//--------------EXO 4-------------------//

var coup = 0;
var nbrand = Math.floor(Math.random() *100);

$("#bouton8").click(function(){

  var nbr=$("#entrée").val();
  coup = coup+1;

  if (nbr < nbrand){
    $("#return3").text("trop petit!");
  }

  else if (nbr > nbrand){
    $("#return3").text("trop grand!");
  }
  else{
    $("#return3").text("Vous avez gagné en "+coup+" coups, bien joué!");
  }
  
});







});
