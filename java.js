const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


 const convertValues= async ()=> {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
    
  const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(atualizado => atualizado.json())
 
  const dolartoday = data.USDBRL.high
  const eurotoday = data.EURBRL.high
  const libratoday = 7.7

 
 
  console.log(data)

   


if(currencySelect.value =="dolar"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD"
    }).format (inputCurrencyValue / dolartoday)

}

if(currencySelect.value =="euro"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
        style: "currency",
        currency: "EUR"
    }).format (inputCurrencyValue/eurotoday)

}

if (currencySelect.value == "Libra"){
    currencyValueConverted.innerHTML =new Intl.NumberFormat("en-UK",{
        style:"currency",
        currency: "GBP"
        }).format (inputCurrencyValue/ libratoday)
}


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style:"currency",
        currency:"BRL"
    }) .format(inputCurrencyValue)
 }
 



function changeCurrency() {
    const currencyName= document.querySelector(".currency-name")
    const currencyImagen=document.querySelector(".currency-img") 

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML= "Dolar americano"
        currencyImagen.src ="./assets/DOLAR.png"
    }
    


if (currencySelect.value == "euro") {
    currencyName.innerHTML= "Euro"
    currencyImagen.src ="./assets/euro.png"
}

 if (currencySelect.value == "Libra") {
    currencyName.innerHTML= "libra"
    currencyImagen.src = "./assets/Libra.png"
}

convertValues()

  }







currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)