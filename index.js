import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
 

const appSetting = {
    databaseURL: "https://playground-decd6-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSetting)
const database = getDatabase(app)
const moviesInDb = ref(database, "movies")

console.log(app);

const inputField = document.getElementById("input-field")
const addButton = document.getElementById("add-button")


addButton.addEventListener("click", function(){
    let inputValue = inputField.value

    push(moviesInDb, inputValue)

    console.log(`${inputValue} added to  database `);
})