const convertButton=document.querySelector(".convert-button")

function convertValues (){

    const inputCurrencyValue=document.querySelector (".input-currency").value
    console.log(inputCurrencyValue)
    const dolarToday= 5.2
    const convertValue = inputCurrencyValue/dolarToday
    console.log (convertValue)

} 
convertButton,addEventListener ("click", convertValues)