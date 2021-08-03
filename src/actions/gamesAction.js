import axios from 'axios';
import { popularGamesURL , upcomingGamesURL, newGamesURL, searchedGameURL} from '../api';

export const loadGames = () => async (dispatch) => {
    const popularData = await axios.get(popularGamesURL());
    const upcomingData = await axios.get(upcomingGamesURL());
    const newGamesData = await axios.get(newGamesURL());
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results, 
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results,

        }
    })
};
export const fetchSearch = (game_name) => async(dispatch) => {
    const searchedGames = await axios.get(searchedGameURL(game_name));
    dispatch({
        type:  "FETCHED_SEARCHED",
        payload: {
            searched: searchedGames.data.results,
        }
    })
};