
window.onload = function() {
  if (document.body.classList.contains("home-page")) {
    alert("Welcome to my Portfolio!");
  }
  animateSkills();
  typingEffect();
};


function typingEffect() {
  const typing = document.getElementById("typing");
  if (!typing) return;
  const text = "HELLO GOOD DAY, I'm IDOWU PETER.";
  let i = 0;
  function type() {
    if (i < text.length) {
      typing.textContent += text.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }
  type();
}

function animateSkills() {
  const bars = document.querySelectorAll(".bar");
  bars.forEach(bar => {
    const target = bar.getAttribute("data-percent");
    let count = 0;
    const interval = setInterval(() => {
      if (count >= target) {
        clearInterval(interval);
      } else {
        count++;
        bar.style.width = count + "%";
        bar.textContent = count + "%";
      }
    }, 30);
  });
}

