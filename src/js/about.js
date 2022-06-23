let stats = document.querySelector(".quote"),
  boxs = document.querySelectorAll(".container .box h1"),
  started = false;

function startCount(el) {
  let goal = el.dataset.goal;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(counter);
    }
  }, 1500 / goal);
}

window.onload = function () {
  window.onscroll = function () {
    if (window.scrollY >= stats.offsetTop) {
      if (!started) {
        boxs.forEach((box) => startCount(box));
      }
      started = true;
    } else {
      boxs.forEach((box) => box.textContent == 0);
    }
  };
}