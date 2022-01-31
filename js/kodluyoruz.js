let input = document.querySelector("#task");
let addBtn = document.querySelector("#liveToastBtn")
let list = document.querySelector("#list")


addBtn.onclick = function(){
  let newItem=document.createElement("li")
  let deleteButton = document.createElement("button")
  deleteButton.classList.add("close")
  deleteButton.innerHTML = "<img src='https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png'/>"
  newItem.innerText = input.value
  newItem.appendChild(deleteButton)
  list.appendChild(newItem)
  input.value = ""
  getList()
  deleteItem()
}

function deleteItem(){
  let closeButton = document.querySelector(".close")
  closeButton.onclick = function(event){
    console.log(event)
    newItem.remove()
  }
}

function getList(){
  let listItem = document.querySelectorAll("#list li")
  listItem.forEach(function(element, index){
    console.log(element, index)
    element.onclick = function(event){
      this.classList.toggle("checked")
    }
  })
}
getList()