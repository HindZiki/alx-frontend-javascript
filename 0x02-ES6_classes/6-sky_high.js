// 6-sky_high.js

import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
        // Appelle le constructeur de la classe parent (Building)
        super(sqft);

        // Assigner floors
        this._floors = floors;
    }

    // getter pour floors.
    get floors() {
        return this._floors;
    }

    // override de la méthode evacuation Warning Message.
    evacuationWarningMessage() {
        return `Evacuate slowly the ${this._floors} floors`;
    }
}
