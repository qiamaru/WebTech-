var people = [
{name: ['Alyssa', 'P.', 'Hacker'], age: 26},
{name: ['Ben', 'L.','Bitdiddle'], age: 34},
{name: ['Eva','Lu', 'Ator'], age: 40},
{name: ['Lem', 'E.','Tweakit'], age: 45},
{name: ['Louis','M.','Reasoner'], age: 21},
{name: [ 'Shahan','Haig','Krakirian'], age: 26}
];

function fullNamelist(){

  var allname = "";
  for (var i = 0; i < people.length; i++) {
    allname+= (i+1) + "-";
  for (var j = 0; j < 3; j++) {
    allname += people[i].name[j] + " ";
  }
  allname+="<br>";
  }
document.getElementById("solution").innerHTML = allname;
}

function getAgefunction() {

  let input = document.getElementById("name-input").value;
  var age;
  for (var i=0; i<people.length; i++) {
    if (people[i].name[0] == input){
      age = people[i].age;

    }}
    document.getElementById("solution1").innerHTML = "<br>" + "Age: " + age;
}

document.getElementById("all").addEventListener("click", fullNamelist);

document.getElementById("age-button").addEventListener("click", getAgefunction)
