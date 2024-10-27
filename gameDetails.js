export class GameDetails {
    constructor(id) {
        this.gameID = id;
    }
    async fetchGameDetails() {
        const api = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.gameID}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'b33443e840msheef8fc5fa116c72p12d648jsncd38b3c82ad0',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(api, options);
            const result = await response.json();
            return result;
        } catch (error) {
            console.error(error);
        }
    }
}