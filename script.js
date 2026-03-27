// CHUYỂN TAB ĐĂNG NHẬP / ĐĂNG KÝ
function showForm(type){
    let login=document.getElementById("login");
    let register=document.getElementById("register");
    document.querySelectorAll(".tab button").forEach(btn=>btn.classList.remove("active"));
    if(type==="login"){login.classList.add("active");register.classList.remove("active");document.querySelector(".tab button:first-child").classList.add("active");}
    else{register.classList.add("active");login.classList.remove("active");document.querySelector(".tab button:last-child").classList.add("active");}
}

// PARTICLES
const hero=document.querySelectorAll(".hero");
hero.forEach(h=>{
    for(let i=0;i<50;i++){
        let p=document.createElement("div");
        p.classList.add("particle");
        p.style.left=Math.random()*100+"%";
        p.style.width=p.style.height=2+Math.random()*5+"px";
        p.style.animationDuration=2+Math.random()*5+"s";
        p.style.backgroundColor=`hsl(${Math.random()*360},100%,60%)`;
        h.appendChild(p);
    }
});