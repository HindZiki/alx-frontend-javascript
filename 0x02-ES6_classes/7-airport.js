// 7-airport.js

export default class Airport {
    constructor(name, code) {
        this._name = name;
        this._code = code;
    }

    // redéfinir la méthode tostring pour retourner le code de l'aéroport.
    toString() {
        return `[object ${this._code}]`;
    }
}
