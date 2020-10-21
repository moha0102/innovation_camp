const menu = document.getElementById('nav-menu');
const nav = document.getElementById('nav');
const bars = document.getElementById('bars');

if (window.outerWidth > 760) {
  menu.style.display = 'flex';
  document.documentElement.style.overflow = 'visible';
  nav.style.backgroundColor = '#F6F7EB';
  bars.style.color = 'black';
} else {
  menu.style.display = "none";
}


window.onresize = function() {
  if (window.outerWidth > 760) {
    menu.style.display = 'flex';
    document.documentElement.style.overflow = 'visible';
    nav.style.backgroundColor = '#F6F7EB';
    bars.style.color = 'black';
  } else {
    menu.style.display = "none";
    nav.style.backgroundColor = '#F6F7EB';
    bars.style.color = 'black';
  }
}


bars.onclick = function() {
  if (menu.style.display === 'none') {
    menu.style.display = "flex";
    nav.style.backgroundColor = '#212A3B';
    document.documentElement.style.overflow = 'hidden';
    bars.style.color = 'white';
  } else {
    menu.style.display = "none";
    document.documentElement.style.overflow = 'visible';
    nav.style.backgroundColor = '#F6F7EB';
    bars.style.color = 'black';
    }
  }
