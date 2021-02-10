import Chalk from 'chalk';
import Axios from 'axios';
class Fetch {
    constructor(pokemon, color)
    {
        this.pokemon = pokemon;
        this.color = color;
    }
    Fetch()
    {
    // Fetch this URL
    Axios('https://pokeapi.co/api/v2/pokemon/' + this.pokemon)
    // And then...
    .then( (response) => {
        // Use the 'data'
        const pokemon = response.data;

        // In this example, the above URL will return an object
        //  with data on the Pokemon requested
        console.log( Chalk.hex(this.color) ("This is a " + pokemon.name + " and its ID is " + pokemon.id) );
    })
    .catch(function (error) {
        // handle error
        console.log( Chalk.red("Error: " + error) );
        });
    }
}
export default Fetch;