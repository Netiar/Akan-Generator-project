
//day and it's ghanaian name equivalent

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosue", "Adwoa", "Abenaa", "Akue", "Yaa", "Afua", "Ama"];
let gender = document.getElementsByName("gender");
console.log(gender);



function displayDate(){

    let x = document.forms["myForm"]["date"].value;  
    let y = document.forms["myForm"]["radio"].value;
    let isValidDate = Date.parse(x);
    let index = date.getDay();
    let z = document.getElementById("message");


    if (x == "" && document.getElementById("radio").checked) {
        alert("Invalid!");
        return false;
    }else if(x == "" && document.getElementById("radio").checked) {
        alert("invalid!")
        return false;    
    }else if (x !== "" && document.getElementById("radio").checked) {
        z.innerHTML = (" Akan name is ${maleNames[index]}.")
    }else if (x !== "" && document.getElementById("radio").checked) {
        z.innerHTML = ("  Akan name is $feMaleNames[index]}.")
    }displayContainer();

     
}



function displayContainer() {
    let page = document.getElementById("container");

    page.style.display = "block";

}

//function alertMessage(){}


























































