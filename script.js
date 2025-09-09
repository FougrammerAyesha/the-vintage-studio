const text = document.getElementById('text');
    text.innerHTML = text.textContent.replace(/\S/g,"<span>$&</span>");
    const ele = document.querySelectorAll('span');
    for(var i = 1; i<ele.length; i++){
      ele[i].style.transform="rotate("+i*17+"deg)";
    }

    document.getElementById('btn').addEventListener('click', function() {
      window.location.href = 'index2.html';
    });

window.onload = function() {
    if (window.location.hash) {
        history.replaceState("", document.title, window.location.pathname + window.location.search);
    }
};

window.onbeforeunload = function () {
  window.scrollTo(0,0);
}

window.addEventListener("scroll", function() {
  const hero = document.querySelector(".hero-line");
  const scrollY = window.scrollY;
  
  // Move background as you scroll
  hero.style.backgroundPosition = `center ${scrollY * 0.5}px`;
});