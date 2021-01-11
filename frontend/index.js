const BASE_URL = "http://localhost:3000"

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("buyers-form").addEventListener('click', createForm )

  fetchBuyers()
  // createForm()
  fetchFish()
})



function fetchBuyers(){
  fetch(`${BASE_URL}/buyers`)
  .then(resp => resp.json())
  .then(buyers => {
    for (const buyer of buyers) {
      let b = new Buyer(buyer.name, buyer.id, buyer.email)
      b.renderBuyer();
    }
  })
}

function fetchFish(){
  fetch(`${BASE_URL}/fish`)
  .then(resp => resp.json())
  .then(fishes => {
    for (const fish of fishes ){
      let f = new Fish(fish.name, fish.buyer_id)
      f.renderFish();
    }
  })
}


//create - create new buyer 
function createForm(){
  let buyersForm = document.getElementById("buyers-form")

  buyersForm.innerHTML += 
  `
  <form>
    Username: <input type = "text" id = "name">
    <br>
    Email: <input type = "text" id = "email">
    <br>
    <input type = "submit" value = "Create User">
  </form>
  `

  buyersForm.addEventListener("submit", newUserSubmission)
}

function newUserSubmission(){
  event.preventDefault();
  let name = document.getElementById("name").value
  let email = document.getElementById("email").value

  let buyer = {
    name: name, 
    email: email 
  }

  fetch(`${BASE_URL}/buyers`, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(buyer)
  })
  .then(resp => resp.json())
  .then(buyer => {
    let b = new Buyer(buyer.name, buyer.id, buyer.email)
    b.renderBuyer();
  })
}




//delete - delete a buyer 
function deleteBuyer(){
  let buyerId = parseInt(event.target.dataset.id)

  fetch(`${BASE_URL}/buyers/${buyerId}`, {
    method: "DELETE"
  })

  this.location.reload()

}