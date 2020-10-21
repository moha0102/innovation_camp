const menu = document.getElementById('nav-menu');
const nav = document.getElementById('nav');
const bars = document.getElementById('bars');


bars.onclick = function() {
  if (menu.style.display === 'none') {
    menu.style.display = "flex";
    document.documentElement.style.overflow = 'hidden';
    nav.style.backgroundColor = '#212A3B';
    bars.style.color = 'white';
   
   
  } else {
    menu.style.display = "none";
    document.documentElement.style.overflow = 'visible';
    nav.style.backgroundColor = '#F6F7EB';
    bars.style.color = 'black';
    }
  }
