//Hodnoty pro hex cislo v poli
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

// selectujeme do promennych 
const btn = document.getElementById("btn")
const color = document.querySelector(".color") 
// Snímáme tlačítko a spouštíme funkci s cyklem pro vytvoření hex cisla.
btn.addEventListener("click", function(){
    let hexColor = "#"
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
        
    }
    color.textContent = hexColor; // text obsahuje kod hex barvy
    document.body.style.backgroundColor = hexColor; //pozadí je nastaveno podle hex barvy
})
//Funkce vrací náhodná čísla z celeho rozsahu našeho úvodního pole
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}