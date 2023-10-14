import { fetchDataSignUp, fetchDataLogin } from "../../app/app.js";
import { customAlert } from "../../functions/functions.js";
import { parallax } from "./utils/parallax.js";

window.addEventListener("mousemove", parallax);

window.addEventListener("keyup", async function(e){
    if(changeOptionText[1].style.display === "flex" && e.key === "Enter"){
        if(inputPasswordRegister.value === inputPasswordAuth.value){
            await fetchDataSignUp(inputUsernameRegister.value, inputEmailRegister.value, inputPasswordRegister.value);
            clearUsers(INPUTS)
        }else{
            customAlert(PASS_ERROR, PASS_ERROR_MSG, ERROR)
        }
    }else if(changeOptionText[0].style.display === "flex" && e.key === "Enter"){
        await fetchDataLogin(inputUsername.value, inputPassword.value);
        clearUsers(INPUTS)
    }
})

window.addEventListener("load", function () {
    imagenes.setAttribute("src", `src/view/css/img/wallpapers/img_${Math.floor(Math.random() * 12)}.jpg`);
});


botonLogin.addEventListener("click", async function () {
    await fetchDataLogin(inputUsername.value, inputPassword.value);
    clearUsers(INPUTS);
});

botonSignUp.addEventListener("click", async function () {
    if (inputPasswordRegister.value === inputPasswordAuth.value) {
        await fetchDataSignUp(inputUsernameRegister.value, inputEmailRegister.value, inputPasswordRegister.value);
    } else {
        customAlert(PASS_ERROR, PASS_ERROR_MSG, ERROR)
    }

    clearUsers(INPUTS);
});


for (let i = 0; i < changeOptionText.length; i++) {
    changeOptionText[i].addEventListener("click", () => {
        changeOption(changeOptionText[i].getAttribute("value"));
    });
}

function changeOption(texto) {
    switch (texto) {
        case "signup":
            signUp.classList.remove("flex");
            signUp.classList.add("none");
            login.classList.add("flex");
            login.classList.remove("none");
            changeOptionText[1].style.display = "none";
            changeOptionText[0].style.display = "flex";
            break;
        case "login":
            signUp.classList.add("flex");
            signUp.classList.remove("none");
            login.classList.remove("flex");
            login.classList.add("none");
            changeOptionText[0].style.display = "none";
            changeOptionText[1].style.display = "flex";
            break;
    }
}

function clearUsers(array) {
    array.forEach((element) => {
        element.value = "";
    });
}


