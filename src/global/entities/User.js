export class User{
    _username
    _email
    _password

    constructor(username, email, password){
        this._username = username;
        this._email = email;
        this._password = password
    }

     toString() {
        return `Usuario ${this.username}, con email ${this.email}, y contraseña ${this.password}`
    }

    getUsername(){
        return this._username
    }
}