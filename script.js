// Récupérer tous éléments DOM



// Récupérer les boutons plus
const btnPlus = document.getElementsByClassName("fa-plus-circle");

console.log("buttons plus : ", btnPlus)

// Récupérer les boutons moins
const btnMinus = document.getElementsByClassName("fa-minus-circle")

console.log("buttons moins : , btnMinus")


// Récupérer les boutons coeurs
const btnColor = document.getElementsByClassName("fa-heart");

console.log("buttons couleur : ", btnColor)

// Ajouter les ecouteurs d'evenements sur les boutons plus
for (let i = 0; i < btnPlus.length; i++) {
    const button = btnPlus[i];
    
    button.addEventListener("click", () => {
        console.log(`button ${i} clicked`)
        const quantity = button.nextElementSibling
        const value = quantity.textContent
        const valueInt = parseInt(value)
        const newValue = valueInt + 1
        quantity.textContent = newValue
        
    })

}

// Ajouter les ecouteurs d'evenements sur les boutons moins
for (let i = 0; i < btnMinus.length; i++) {
    const button = btnMinus[i];

    button.addEventListener("click", () => {
        console.log(`button ${i} clicked`)
        const quantity = button.previousElementSibling
        const value = quantity.textContent
        const valueInt = parseInt(value)
        const newValue = valueInt - 1
        newValue >= 0 ? quantity.textContent = newValue : quantity.textContent = 0
        
    }) 
    
}

// Ajuster les boutons de couleur des coeurs 
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'orange']
for (const color in Object) {

    button.addEventListener("click", () => {
        console.log(`button ${colors} cliked`)
        const colors = button.nextElementSibling
        const coeurs = 

    })
    
}

 