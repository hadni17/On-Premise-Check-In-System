let loadTarget = document.querySelector(".loading")

function show_loading(){
    loadTarget.style.display = "block";
    loadTarget.style.opacity = 1;
}
function hide_loading(){
    //loadTarget.style.display = "none";
    let loadEffect = setInterval(() => {
        if(!loadTarget.style.opacity) {
            loadTarget.style.opacity = 1;
        }
        if (loadTarget.style.opacity > 0){
            loadTarget.style.opacity -= 0.1;
        } else {
            clearInterval(loadEffect)
            loadTarget.style.display = "none"
        }
    },100)
}
function tampil_data(){
    show_loading()
    fetch("http://192.168.18.68:8055/items/order?fields=customer_id.customer_id,customer_id.customer_name,ticket_id.ticket_id,ticket_id.ticket_type&filter[customer_id]=2")
        .then((response) => response.json())
        .then((response) => {
            response.map(data => {
                //var textNode = document.createTextNode(response.)
            })
        })
}