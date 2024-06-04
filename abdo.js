let con = document.getElementById("container");
let msg = document.getElementById("msg");
con.addEventListener("touchstart",()=>{
  txt.style.transform = "translateY(-150px)";
  msg.style.visibility = "visible";
});
con.addEventListener("touchend",()=>{
    txt.style.transform = "translateY(0px)";
    msg.style.visibility = "hidden";
})