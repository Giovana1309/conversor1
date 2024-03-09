const convertButton=document.querySelector(".convert-button")
const currencySelect =document.querySelector(".currency-select")

function convertValues (){

    const inputCurrencyValue=document.querySelector (".input-currency").value
    const currencyValueToConvert= document.querySelector(".currency-value-to-convert")
    const currencyValueToConverted = document.querySelector(".currency-value")
    console.log(currencySelect)
    const dolarToday= 5.2
    const eurotoday=6.2

    const convertValue = inputCurrencyValue / dolarToday

    currencyValueToConvert.innerHTML = new Intl.NumberFormat 
    ("pt-br",{
style:"currency",
currency: "BRL"

    }) .format(inputCurrencyValue)


    currencyValueToConverted.innerHTML = new Intl.NumberFormat ("en-US",{

style:"currency",
currency: "USD"

    }) .format (convertValue)
    



    console.log (convertValue)

} 
convertButton,addEventListener ("click", convertValues)