import https from 'https'
import chalk from 'chalk'
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



const url = 'https://v6.exchangerate-api.com/v6/7eefe0ba4fe8016b2a9f289b/latest/USD'
const convertedAmount = (amount, rate) => {
    return amount * rate
}

https.get(url, (res) => {
    let data = '';
    res.on('data', (chunks) => {
        data += chunks
    })
    res.on('end', () => {
        const rates = JSON.parse(data).conversion_rates

        rl.question('Enter a amount in USD: ', (amount) => {
            rl.question('Enter a target Currency (e.g INR,PKR): ', (currency) => {
                const rate = rates[currency.toUpperCase()]
                if (rate) {
                    console.log(`${amount} USD to ${convertedAmount(amount, rate)} ${currency.toUpperCase()} `)

                } else {
                    console.log('Invalid Currency')
                }
                rl.close()
            })

        })

    })
})


