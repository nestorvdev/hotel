import axios from "axios";
import * as Constants from "../../constants";

const baseURL = Constants.URL_BACKEND;

function AxiosGetAllCities(setData, setErrorMessage){
    axios.get(`${baseURL}cities/all`)
    .then((response) => {
      setData(response.data);     
    })
    .catch((error) => {
      setErrorMessage(error);
    });
}

export {AxiosGetAllCities}