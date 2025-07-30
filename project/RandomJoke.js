import https from 'https'
import chalk from 'chalk'
const getJoke = () => {
    const jokeApi = 'https://official-joke-api.appspot.com/random_joke'

    https.get(jokeApi, (response) => {
        let data = '';
        response.on('data', (joke) => {
            data += joke
        })
        response.on('end', () => {
            const joke = JSON.parse(data)
            console.log('Here is your Random Joke: ')
            console.log(chalk.red(`${joke.setup}`))
            console.log(chalk.red.bold.bgGreen(`${joke.punchline}`))
        })
        response.on('error', (err) => {
            console.log(err)
        })
    })
}
getJoke()