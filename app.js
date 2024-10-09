


// function add(){
//     let input =document.getElementById("input").value;

    
//     document.getElementById("show").innerHTML +=`${input} <br>`;
    
//     input.value=' ';

// }

function add() {
    let inputElement = document.getElementById("input");
    let inputValue = inputElement.value;
    
    document.getElementById("show").innerHTML += `${inputValue} <br>`;
    
    inputElement.value = ''; 
}
