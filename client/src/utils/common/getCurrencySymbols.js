const symbols ={
    'usd': '$',
    'eur': '€',
    'bgn': 'lev'
}
const getCurrencySymbols = (currency) => {
    return symbols[currency.toLocaleLowerCase()]
}

export default getCurrencySymbols