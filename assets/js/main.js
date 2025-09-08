const observer = new IntersectionObserver((entries, observer) => {
  if (entries[0].isIntersecting) {
    document.querySelector("nav").classList.remove("canseeit");
  } else {
    document.querySelector("nav").classList.add("canseeit");
  }
}, {
  root: null, 
  threshold: 0 
});

observer.observe(document.querySelector("header"));