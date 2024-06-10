
var bod=document.getElementById("body").style.display="none"
// var loade=document.getElementById("loader").style.display="block"


function bo(){
    document.getElementById("none").style.display="none"

    document.getElementById("body").style.display="block"
}
setTimeout(bo,5500)

document.getElementById("re").addEventListener("click",()=>{
    localStorage.clear()
    
})
function en(){
    if(localStorage.getItem("login") !== "true"){
        location.href="login.html"
    }
}
en();
var num=1;
function more(a){
    console.log(a)
    document.getElementById("empty").innerHTML=""
    // num++
    if(a == "a"){
    var show=document.getElementById("show");
    var div=document.createElement("div");
    div.className="div1"

var img=document.getElementById("i1").src
div.innerHTML=` <img src="${img}" height="300" width="400" alt="">
    <h4>
        Blue Tom & Jerry Printed <BR>Short-Sleeves T.Shirt</h4>
<span>Price </span><span id="price" type="number">500</span><BR>
<span>Quantity </span><input type="number" name="" id="numb"><BR>
<BR>
<button id="add1" class="ct">Add To Cart</button>
`
show.appendChild(div)


var b1=document.getElementById("add1");
b1.addEventListener("click",()=>{


   var pr=document.getElementById("price")
   var h=document.getElementById("h2").innerText;
   console.log(h);

   var nb=+document.getElementById("numb").value



var d2=document.createElement("div");
var canbody=document.getElementById("canbody")
d2.innerHTML=`
<img src="${img}" height="300" width="400" alt="">
<h4>
        Blue Tom & Jerry Printed <BR>Short-Sleeves T.Shirt</h4>
       <span>Price Is <span>${pr.innerHTML}<BR>
       <span>Quantity is  <span>${nb}<BR>
        `
canbody.appendChild(d2)

var check=document.getElementById("check1").innerText=`${num++}`
div.remove()
})
    }
    else  if(a == "b"){
        var show=document.getElementById("show");
        var div=document.createElement("div");
        div.className="div1"
    
    var img=document.getElementById("i2").src
    div.innerHTML=` <img src="${img}" height="300" width="400" alt="">
        <h4>
            Blue Tom & Jerry Printed <BR>Short-Sleeves T.Shirt</h4>
    <span>Price </span><span id="price" type="number">500</span><BR>
    <span>Quantity </span><input type="number" name="" id="numb"><BR>
    <BR>
    <button id="add1" class="ct">Add To Cart</button>
    `
    show.appendChild(div)
    
    
    var b1=document.getElementById("add1");
    b1.addEventListener("click",()=>{
    
    
       var pr=document.getElementById("price")
       var h=document.getElementById("h2").innerText;
       console.log(h);
    
       var nb=+document.getElementById("numb").value
    
    
    
    var d2=document.createElement("div");
    var canbody=document.getElementById("canbody")
    d2.innerHTML=`
    <img src="${img}" height="300" width="400" alt="">
    <h4>
            Blue Tom & Jerry Printed <BR>Short-Sleeves T.Shirt</h4>
           <span>Price Is <span>${pr.innerHTML}<BR>
           <span>Quantity is  <span>${nb}<BR>
            `
    canbody.appendChild(d2)
    
var check=document.getElementById("check1").innerText=`${num++}`
    div.remove()
    })
        }
        else  if(a == "c"){
            var show=document.getElementById("show");
            var div=document.createElement("div");
            div.className="div1"
        
        var img=document.getElementById("i3").src
        div.innerHTML=` <img src="${img}" height="300" width="400" alt="">
            <h4>
                Blue Tom & Jerry Printed <BR>Short-Sleeves T.Shirt</h4>
        <span>Price </span><span id="price" type="number">500</span><BR>
        <span>Quantity </span><input type="number" name="" id="numb"><BR>
        <BR>
        <button id="add1" class="ct">Add To Cart</button>
        `
        show.appendChild(div)
        
        
        var b1=document.getElementById("add1");
        b1.addEventListener("click",()=>{
        
        
           var pr=document.getElementById("price")
           var h=document.getElementById("h2").innerText;
           console.log(h);
        
           var nb=+document.getElementById("numb").value
        
        
        
        var d2=document.createElement("div");
        var canbody=document.getElementById("canbody")
        d2.innerHTML=`
        <img src="${img}" height="300" width="400" alt="">
        <h4>
                Blue Tom & Jerry Printed <BR>Short-Sleeves T.Shirt</h4>
               <span>Price Is <span>${pr.innerHTML}<BR>
               <span>Quantity is  <span>${nb}<BR>
                `
        canbody.appendChild(d2)
        
      var check=document.getElementById("check1").innerText=`${num++}`
        div.remove()
        })
            }
}




window.addEventListener("scroll",()=> {
    var navba=document.getElementById('navb');
    var ul=document.getElementById("ul")
    var u1=document.getElementById("u1")
    var u2=document.getElementById("u2")
    var u3=document.getElementById("u3")
    var u4=document.getElementById("u4")
    var u5=document.getElementById("u5")
    var u6=document.getElementById("u6")
    var u7=document.getElementById("u7")
    console.log(window.scrollY)
    if (window.scrollY > 200) {
        navba.classList.add("fixe")
ul.classList.add("whi")
u1.classList.add("whi")
u2.classList.add("whi")
u3.classList.add("whi")
u4.classList.add("whi")
u5.classList.add("whi")
u6.classList.add("whi")
u7.classList.add("whi")

        } else {
            navba.classList.remove("fixe")
            ul.classList.add("whi")
u1.classList.remove("whi")
u2.classList.remove("whi")
u3.classList.remove("whi")
u4.classList.remove("whi")
u5.classList.remove("whi")
u6.classList.remove("whi")
u7.classList.remove("whi")
    }
})
// window.addEventListener("scroll", handleResize );
// Initial check

