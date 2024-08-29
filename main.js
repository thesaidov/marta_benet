function more() {
    let more = document.getElementById("more")
    if(more.style.display == "none"){
        document.getElementById("more").style.display = "flex"
    }else{
        document.getElementById("more").style.display = "none"
    }
}
document.getElementById("btnmore").addEventListener("click", more)


