var data;
var selectedBio;

$.ajax("people.json").done(function(data){
  // console.log(data);
  loopPeople(data);
}).fail(function(error){
  console.log("error of json file", error);
  // loopPeople(data);
});

function loopPeople(data){
  // console.log(data.People.length);
  var newCard = "";
  for(var i=0;i<data.People.length;i++){
    if(i%3===0){
        newCard += `<div class="row">`;
      }
    newCard += `<div class="whole-card col-sm-6 col-md-4">`;
    newCard += `<div class="card">`;
    newCard += `<header class="card-header">${data.People[i].title}</header>`;
    newCard += `<article class="image"><img src="${data.People[i].image}"></article>`;
    newCard += `<section class="section">${data.People[i].name}<br/>`;
    newCard += `<section class="section bio">${data.People[i].bio}</section>`;
    newCard += `</div></div>`;
    if(i%3===2){
        newCard += `</div>`;
      }
  }
  $("#user-output").append(newCard);
}


$("#user-output").click(function(){
  $("#user-input").focus();
  // $(".bio").html(input);
  $("#user-input").val();
});

// function inputs(){
// var $input = $("user-input");
// var $output = $(".bio").append($input);
var $output = $("user-output");

$("#user-input").keyup(function() {
    $output.val( this.value );
});


// var $output = $("user-output");

// console.log($output);

// console.log($output.prevObject[0].childNodes[1].childNodes[2].children[1]);


// console.log(doSomething(data));

function mirrorText(){

}
