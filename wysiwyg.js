var data;

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
    newCard += `<div class="col-sm-6 col-md-4">`;
    newCard += `<div class="card">`;
    newCard += `<header class="card-header">${data.People[i].title}</header>`;
    newCard += `<article class="image"><img src="${data.People[i].image}"></article>`;
    newCard += `<section class="section">${data.People[i].name}`;
    newCard += `</div></div>`;
    if(i%3===2){
        newCard += `</div>`;
      }
  }
  $("#user-output").append(newCard);
  console.log(newCard);
}
