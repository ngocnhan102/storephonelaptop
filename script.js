let a =document.getElementById("modal")

let modal = new bootstrap.Modal(a,{keyboard:false}) 

document.getElementById('show').addEventListener("click",()=>modal.toggle())
const close = ()=>modal.toggle()

let b =document.getElementById("modal-dk")

let modaldk = new bootstrap.Modal(b,{keyboard:false}) 
const opendk = ()=>{
	modal.hide();modaldk.show()
}
