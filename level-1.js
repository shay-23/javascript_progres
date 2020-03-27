//Question 1
const cat = {
    complain: "",
    bark: function() {
        console.log("Meow!");
    }
}
cat.bark();
//Meow!

//Question 2
console.log(document.querySelector("h3"));
const heading = document.querySelector("h3");
console.log(heading);


//Question 3
heading.style.fontSize = "2em";

//Question 4
heading.classList.add("subheading");
console.log(heading.subheading);

//Question 5
console.dir(document.querySelector("p"));
const paragraphs = document.querySelector("p");
console.dir(paragraphs);

//Question 6
console.dir(document.querySelector(".results"));
const resultsContainer = document.querySelector(".results");
console.dir(resultsContainer);
resultsContainer.innerHTML = "<p>New paragraph</p>";

//Question 7
function myFunction(catArray) {
    for (var i = 0; i < cats.length; i++) {
        console.log(cats[i].name);
    }
    const cats = [{
            name: "Blob",
            age: 10
        },
        {
            name: "Harold",
        },
        {
            name: "Blurt",
            age: 21
        }
    ];