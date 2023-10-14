//INPUTS 
let inputUsername                       = document.querySelector(".input-user")
let inputUsernameRegister               = document.querySelector(".input-user-register")
let inputPassword                       = document.querySelector(".input-pass")
let inputPasswordRegister               = document.querySelector(".input-pass-register")
let inputPasswordAuth                   = document.querySelector(".input-pass-auth")
let inputEmailRegister                  = document.querySelector(".input-email-register")
const INPUTS                            = [inputPasswordRegister, inputPassword, inputPasswordAuth, inputEmailRegister, inputUsername, inputUsernameRegister]

//FORM
let botonLogin                          = document.querySelector(".login-button")
let botonSignUp                         = document.querySelector(".sign-button")

let changeOptionText                    = document.querySelectorAll(".change-option")

let imagenes                            = document.querySelector(".imagen")
let login                               = document.querySelector(".login")
let signUp                              = document.querySelector(".signUp")

//MENSAGES

//SIGNUP -->
const SIGN_USER_SUCCESS                 = "Usuario creado correctamente"
const SIGN_SUCCESS_BACK_LOGIN           = 'Ve al inicio de sesion y pon tu cuenta'

const USERNAME_EXISTS_ERROR             = "El nombre de usuario ya existe"
const USERNAME_EXIST_ERROR_OPT          = "Escoja otro nombre de usuario valido"

const EMAIL_EXISTS_ERROR                = "Este email ya esta registrado"
const EMAIL_EXISTS_ERROR_DET            = "Comprueba que no tengas una cuenta ya o prueba otro email"

const PASS_ERROR                        = "Las contraseñas no coinciden"
const PASS_ERROR_MSG                    = "Verifica que estes poniendo bien las 2 contraseñas"

const DATABASE_ERROR                    = "HA PETAO BASTISIMO"
const DATABASE_ERROR_DET                = "Vuelve a intentarlo mas tarde"

const DEFAULT_ERROR                     = "Ha ocurrido un error inesperado"
const DEFAULT_ERROR_MSG                 = "Lo sentimos mucho"

    //SIGNUP <--

    //LOGIN -->

const LOGIN_SUCCESS                     = "Usuario correcto"
const LOGIN_SUCCESS_MSG                 = "Has iniciado sesion correctamente"

const LOGIN_ERROR                       = "Usuario Incorrecto"
const LOGIN_ERROR_MSG                   = "Comprueba tu usuario o contraseña"

//GENERAL MSG 
const SUCCESS                           = "success"
const ERROR                             = "error"

const PETITION_ERROR                    = "error en la peticion"


