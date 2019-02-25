import axios from 'axios';
const apiUrl = 'https://football-players-b31f2.firebaseio.com/players.json?print=pretty';

export function fetchPlayers() {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchplayersSuccess(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const FETCH_PLAYERS_BEGIN = "FETCH_PLAYERS_BEGIN";
export const FETCH_PLAYERS_SUCCESS = "FETCH_PLAYERS_SUCCESS";
export const FETCH_PLAYERS_FAILURE = "FETCH_PLAYERS_FAILURE";

export const fetchPlayersBegin = () => ({
  type: FETCH_PLAYERS_BEGIN
});

export const fetchplayersSuccess = players => ({
  type: FETCH_PLAYERS_SUCCESS,
  payload: { players }
});

export const fetchplayersFailure = error => ({
  type: FETCH_PLAYERS_FAILURE,
  payload: { error }
});