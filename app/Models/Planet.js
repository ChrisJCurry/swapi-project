export default class Planet {
    constructor(data) {
        this.name = data.name;
        this.rotation_period = data.rotation_period;
        this.orbital_period = data.orbital_period;
        this.diameter = data.diameter;
        this.climate = data.climate;
        this.gravity = data.gravity;
        this.terrain = data.terrain;
        this.surface_water = data.surface_water;
        this.population = data.population;
        this.residents = data.residents;
    }

    get Template() {

        return /*html*/`
        <div class="card p-2">
            <div>
                <h4>${this.name}</h4>
                <p>Specs: Rotation: ${this.rotation_period}, Orbital: ${this.orbital_period}, Diameter: ${this.diameter}</p>
                <p>Features: Climate: ${this.climate}, Gravity: ${this.gravity}, Terrain: ${this.terrain}, Water? ${this.surface_water}</p>
                <p>People: ${this.population}</p>    
            </div>
        </div>
        `
    }
}