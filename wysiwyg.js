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
    // $("user-output").append("<p>Stuff</p>");
    var newCard += `<div class="card">`;
    var newCard += `<header class="card-header">${data.People[i].title}</header>`;
    var newCard += `<article class="image"><img src"${data.People[i].image}"></article>`;
    var newCard += `<section class="section">${data.People[i].name}`;
  }
  console.log(newCard);
}



// newCard += `<div class="card" id="card-${[i]}">`;
//     newCard += `<header class="card-header child">${people[i].title}</header>`;
//     newCard += `<article class="image child"><img class="grand-child" src="${people[i].image}">`;
//     newCard += `<section class="section grand-child">${people[i].name}<br /><p class="great-grand-child">${people[i].bio}</p></setion>`;
//     // newCard += `<footer class="card-footer">${people[i].lifespan}</footer>`;
//     newCard += `</article>`;
//     newCard += `</div>`;

// var inputValue = $("user-input")
