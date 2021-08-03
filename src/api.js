const base_url = 'https://api.rawg.io/api/games';
const key_url =  'key=8320d13fbaa0403c966a45a63cd63773'
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10){
        return `0${month}`
    }
    else {
        return month;
    }
};

const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10){
        return `0${day}`
    }
    else {
        return day;
    }
};
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const upcoming_games = `&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const popular_games = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const new_games = `&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}?${key_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}?${key_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}?${key_url}${new_games}`;
export const gameDetailsURL = (game_id) => `${base_url}/${game_id}?${key_url}`;
export const gamescreenShotURL = (game_id) => `${base_url}/${game_id}/screenshots?${key_url}`;
export const searchedGameURL = (game_name) => `${base_url}?search=${game_name}&${key_url}&page_size=9`;