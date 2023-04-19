import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
 

const appSetting = {
    databaseURL: "https://playground-decd6-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSetting)
const database = getDatabase(app)
const shoppingListInDb = ref(database, "shoppingList")

console.log(app);

const inputField = document.getElementById("input-field")
const addButton = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")


addButton.addEventListener("click", function(){
    let inputValue = inputField.value

    push(shoppingListInDb, inputValue)

    clearInputField() // inputField.value = ""

    
    // appendItemToshoppingListEl(inputValue)
    
    // shoppingListEl.innerHTML += `<li>${inputValue}</li>`
     console.log(`${inputValue} added to  database `);
})

// Chalenge
//Call onValue function with shoppingListInDb
// as firts argument and function(snapshot) as 
// second argument

onValue(shoppingListInDb, function(snapshot){
    // reto1: console log snapshot.val para mostrar todos los items
    // en la database shoppingList
    // Respuesta console.log(snapshot.val()); 

    //reto2 use el metodo Object.values() para convertir
    //snapshot.val en un arreglo crea una variable para
    //almacenar estos
    
    let itemsArr = Object.values(snapshot.val())

    clearShoppingListEl()
    // console.log(itemsArr)
    
    //Reto3 Escriba un fro loop para iterar sobre itemsArr
    // e imprima en console cada item
    for(let i = 0; i < itemsArr.length; i++){
        /**
         Reto4 Use la funcion appendItemToshoppingListEl(inputValue)
         dentro del loop para abjuntar los elementos 
         de la shopping list
         
         */
        appendItemToshoppingListEl(itemsArr[i])
        console.log(itemsArr[i])
    }
    
    
    
    
    
})


//Limpia los elementos del elemento <il></li>

function clearShoppingListEl(){
    shoppingListEl.innerHTML = ""

}

//Limpia los valores en el elemento input
function clearInputField(){
    inputField.value = ""
}

//Inserta los valores en elemento <li></li>
function appendItemToshoppingListEl(itemValue){

    shoppingListEl.innerHTML += `<li>${itemValue}</li>`
}