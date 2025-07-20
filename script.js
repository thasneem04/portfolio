
const scrollBtn = document.createElement('button');
scrollBtn.innerText = "↑ Top";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.fontSize = "16px";
scrollBtn.style.fontWeight = "bold";
scrollBtn.style.backgroundColor = "#cd09f4ff";
scrollBtn.style.color = "black";
scrollBtn.style.border = "2px solid #481751ff";

scrollBtn.style.borderRadius = "5px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "1000";

document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 150); 
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

sections.forEach(section => {
  section.classList.add("fade-in-section");
  observer.observe(section);
});