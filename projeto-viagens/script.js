

function abrir_menu(){
    let menu = document.getElementById("menu1")
    let tag_menu = document.getElementsByTagName("menu")[0]
    let header = document.getElementsByTagName("header")[0]
    let main = document.getElementsByTagName("main")[0]
    if(tag_menu.style.display == "none"){
       tag_menu.style.display = "block"
       header.style.height = "250px"
       tag_menu.style.translate = "0px -100px"
       main.style.translate = "0px -95px"
    }
    else{
        tag_menu.style.display = "none"
        header.style.height = "180px"
        main.style.translate = "0px 0px"
    }
}