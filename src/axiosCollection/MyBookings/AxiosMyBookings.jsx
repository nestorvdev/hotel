import axios from "axios";
import * as Constants from "../../constants";

const baseURL = Constants.URL_BACKEND;


function AxiosGetReservationsByUserId(setData, setLoading, setErrorMessage){
    axios.get(`${baseURL}reservations/get/user/${sessionStorage.getItem("id")}`)
      .then(response => {
        setData(response.data);
        setLoading(false);
        console.log(response.data, "data mybookings");
      })
      .catch(error => {
        setErrorMessage(error.message);
        setLoading(false);
      })
}

function AxiosDeleteReservation(reservationId, id, openModalSucceed){
    axios.delete(`${baseURL}reservations/delete/${reservationId}`)
            .then(response => {
                console.log(response.data, `delete reservation ${id}`);
                openModalSucceed()
                //window.location.href = "/mybookings";
            })
            .catch(error => {
                console.log(error.message);
            })
}

export { AxiosGetReservationsByUserId, AxiosDeleteReservation }