export class Games {
    constructor(category) {
        this.category = category;
        this.fetchGames(this.category);
    }
    async fetchGames(category) {
        let api = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'b33443e840msheef8fc5fa116c72p12d648jsncd38b3c82ad0',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }
        try {

            let response = await fetch(api, options);
            let data = await response.json();
            return data;
        } catch (error) {
            console.log(Error);
        }
    }
    
}