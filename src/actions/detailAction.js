import axios from 'axios';
import {gameDetailsURL, gamescreenShotURL} from '../api';
export const loadDetail = (id) => async (dispatch) => {
    const detailData = await axios.get(gameDetailsURL(id));
    const screenShotData = await axios.get(gamescreenShotURL(id));
    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailData.data,
            screen: screenShotData.data,
        }
    })
}