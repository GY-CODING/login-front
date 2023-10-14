import { User } from "../global/entities/User.js"
import { customAlert } from "../functions/functions.js"
const URL       = `http:/26.62.131.11:8080/login/`
const URLSIGN   = `http:/26.62.131.11:8080/signup/`


 export async function fetchDataLogin(user, password) {
        const OPT_TRUE      = "true"
        const OPT_FALSE     = "false"
        const response = await fetch(URL + `${user}/${password}`);

        if (!response.ok) {
            customAlert(DATABASE_ERROR, DATABASE_ERROR_DET, ERROR)
            console.error(PETITION_ERROR)
        }
        const data = await response.text();

        switch(data){
            case OPT_TRUE:
                customAlert(LOGIN_SUCCESS, LOGIN_SUCCESS_MSG, SUCCESS)
                break
            case OPT_FALSE:
                customAlert(LOGIN_ERROR, LOGIN_ERROR_MSG, ERROR)
                break
        }
}

export async function fetchDataSignUp(user,email, password = "") {
        const OPT_SUCCESS       = "1"
        const OPT_ERR_EMAIL     = "-2"
        const OPT_ERR_USERN     = "-3"
        const OPT_ERR_DB        = "0"
        const response = await fetch(URLSIGN + `${user}/${email}/${password}`);

        if (!response.ok) {
            customAlert(DATABASE_ERROR, DATABASE_ERROR_DET, ERROR)
            console.error(PETITION_ERROR)
        }
        const data = await response.text();

        switch(data){
            case OPT_SUCCESS:
                customAlert(SIGN_USER_SUCCESS, SIGN_SUCCESS_BACK_LOGIN, SUCCESS)
                break
            case OPT_ERR_EMAIL:
                customAlert(EMAIL_EXISTS_ERROR, EMAIL_EXISTS_ERROR_DET,ERROR )
                break;
            case OPT_ERR_USERN:
                customAlert(USERNAME_EXISTS_ERROR, USERNAME_EXIST_ERROR_OPT, ERROR)
                break;
            case OPT_ERR_DB:
                customAlert(DATABASE_ERROR,DATABASE_ERROR_DET, ERROR )
                break;
            default:
                customAlert(DEFAULT_ERROR, DEFAULT_ERROR_MSG, ERROR)
                break;
        }
}


