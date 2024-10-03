// 8-hbtn_class.js

export default class HolbertonClass {
    constructor(size, location) {
        this._size = size;
        this._location = location;
    }

    // Conversion de l'objet en Number pour retourner la taille
    valueOf() {
        return this._size;
    }

    // Conversion de l'objet en String pour retourner la localisation
    toString() {
        return this._location;
    }
}
