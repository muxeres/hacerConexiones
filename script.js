console.log("page loaded...");
let elementoChangeName = document.querySelector("#name"),
    elementoBadge1 = document.querySelector("#badge-2"),
    elementoBadge2 = document.querySelector("#badge-500");

let count1 = 2,
    count2 = 418; 

function changeName() {
    let name = "Karola Coquelicot"
    elementoChangeName.innerText = name
}
let removing = function (event) {
    console.log(event.id)
    let parentFirst = event.closest("#request");
    console.log(parentFirst);
    if(event.id==="accept"){
        count1--
        count2++
        elementoBadge1.innerText = `${count1}`
        elementoBadge2.innerText = `${count2}`
        parentFirst.remove()
    }else if(event.id==="close"){
        count1--
        elementoBadge1.innerText = `${count1}`
        parentFirst.remove()
    }
}

