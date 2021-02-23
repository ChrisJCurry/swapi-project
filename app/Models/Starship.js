export default class Starship {
    constructor(data) {
        this.name = data.name
        this.model = data.model
        this.manufacturer = data.manufacturer
        this.class = data.class || data.starship_class
        this.cost = data.cost || data.cost_in_credits
    }

    get Template() {

        return /*html*/`
        <div class="card p-2">
            <div>
                ${this.name}, #${this.model}
                ${this.class} at $${this.cost}
            </div>
        </div>
        `
    }
}