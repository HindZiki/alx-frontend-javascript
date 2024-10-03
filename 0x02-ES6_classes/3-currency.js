// 3-currency.js
export default class Currency {
    constructor(code, name) {
        // Vérification des types
        if (typeof code !== 'string') {
            throw new TypeError('Code must be a string');
        }
        if (typeof name !== 'string') {
            throw new TypeError('Name must be a string');
        }

        // Stockage des attributs avec underscore
        this._code = code;
        this._name = name;
    }

    // Getters
    get code() {
        return this._code;
    }

    get name() {
        return this._name;
    }

    // Setters
    set code(newCode) {
        if (typeof newCode !== 'string') {
            throw new TypeError('Code must be a string');
        }
        this._code = newCode;
    }

    set name(newName) {
        if (typeof newName !== 'string') {
            throw new TypeError('Name must be a string');
        }
        this._name = newName;
    }

    // Méthode pour afficher la devise
    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }
}
