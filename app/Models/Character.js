export default class Character {
    constructor(data) {
        this.name = data.name
        this.mass = data.mass || "Unknown Mass"
        this.hairColor = data.hairColor || data.hair_color
    }

    get Template() {

        return /*html*/`
        <div class="card p-2 bg-light">
            
            <div>
            ${this.name}
            Mass: ${this.mass}
            Hair color: ${this.hairColor}
            </div>
        </div>
        `
    }
}