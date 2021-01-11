class Buyer{
    constructor(name, id, email){
        this.id = id;
        this.name= name; 
        this.email = email;
        // debugger;
    }

    //render buyer instance method
    renderBuyer() {
        let buyersDiv = document.getElementById("buyers-container")

        buyersDiv.innerHTML +=
        `
        <ul>
        <h3>Email: ${this.email}
        <li> Username: ${this.name} 
        </li>
        </ul>
        <button class="delete" data-id=${this.id}>Delete User</button>
        `
    }
}