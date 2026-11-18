const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");
const openBtn = document.getElementById("openBtn");
const messageBtn = document.getElementById("messageBtn");
const modal = document.getElementById("messageModal");
const closeBtn = document.getElementById("closeBtn");
const modalClose = document.getElementById("modalClose");

openBtn.addEventListener("click", () => {
  intro.style.transition = "opacity .8s ease, transform .8s ease";
  intro.style.opacity = "0";
  intro.style.transform = "scale(1.04)";
  setTimeout(() => {
    intro.style.display = "none";
    mainContent.classList.remove("hidden");
    window.scrollTo(0, 0);
    launchSparkles(55);
  }, 750);
});

messageBtn.addEventListener("click", () => modal.classList.add("show"));
closeBtn.addEventListener("click", () => modal.classList.remove("show"));
modalClose.addEventListener("click", () => modal.classList.remove("show"));

document.addEventListener("keydown", e => {
  if (e.key === "Escape") modal.classList.remove("show");
});

function launchSparkles(count){
  for(let i=0;i<count;i++){
    const s=document.createElement("div");
    s.className="spark";
    s.style.left=Math.random()*100+"vw";
    s.style.top=(-10-Math.random()*30)+"vh";
    s.style.animationDuration=(3+Math.random()*5)+"s";
    s.style.animationDelay=Math.random()*2+"s";
    s.style.opacity=.4+Math.random()*.6;
    document.body.appendChild(s);
    setTimeout(()=>s.remove(),9000);
  }
}
