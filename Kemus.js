// bg color change according Bottles theme
const body = document.body;

document.querySelector('.green').addEventListener('mouseenter', () => {
  body.style.backgroundColor = 'rgba(149, 218, 74, 1)';
});

document.querySelector('.yellow').addEventListener('mouseenter', () => {
  body.style.backgroundColor = 'rgba(255, 224, 96, 1)';
});

document.querySelector('.red').addEventListener('mouseenter', () => {
  body.style.backgroundColor = 'rgba(255, 98, 98, 1)';
});

document.querySelector('.bottle').addEventListener('mouseleave', () => {
  body.style.backgroundColor = 'rgb(246, 246, 223)';
});





// bottles left and right entries Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const imgs = entry.target.querySelectorAll('img,h2,a');
    imgs.forEach(img => {
      if (entry.isIntersecting) {
        img.classList.add("show");
      } else {
        img.classList.remove("show");
      }
    });
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }

  });
}, {
  threshold: 0.4
});

document.querySelectorAll(".bottles-mid, .bottles-left, .bottles-right, .right,.bottles , .scroll-img , .Broles, .feedback-coaintainer>h2, .feedback-main, .footer").forEach(parent => {
  observer.observe(parent);
});






// for 0.8 threshold 
const greenObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, {
  threshold: 0.7
});

document.querySelectorAll(".greenBG-mid > img, .greenBG-mid > h2, .greenBG-mid > a").forEach(el => {
  greenObserver.observe(el);
});



// 2. Left Image Observer
const imgObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.4,
  rootMargin: '0px'
});

document.querySelectorAll('.left > img').forEach(img => {
  imgObserver.observe(img);
});