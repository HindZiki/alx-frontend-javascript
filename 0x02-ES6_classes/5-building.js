// 5-building.js

export default class Building {
    constructor(sqft) {
        if (typeof sqft !== 'number') {
            throw new TypeError('Square footage must be a number');
        }

        // Stockage des attributs
        this._sqft = sqft;

        // vérifie si la classe enfant a implémenté la méthode evacuation warning message
        if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
            throw new Error('Class extending Building must override evacuationWarningMessage');
        }
    }

    // getter pour sqft.
    get sqft() {
        return this._sqft;
    }
}
