document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const tabs = [...document.querySelectorAll(".tabs")];
const contents = [...document.querySelectorAll(".content")];

tabs.forEach((tab) => tab.addEventListener("click", handleTabs))

let index = 0;
function handleTabs(e){

  if(tabs.indexOf(e.target) === index) return;
  
  const currentEl = e.target;

  tabs[index].classList.remove("active");
  contents[index].classList.remove("active-content");

  index = tabs.indexOf(currentEl);

  tabs[index].classList.add("active");
  contents[index].classList.add("active-content");
}
;

