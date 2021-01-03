let dropdown_language = document.getElementById('dropdown_language');
let title_dropdown_language = dropdown_language.querySelector('.title');
let dropdown_country = document.getElementById('dropdown_country');
let title_dropdown_country = dropdown_country.querySelector('.title');
let dropdown_location = document.getElementById('dropdown_location');
let title_dropdown_location = dropdown_location.querySelector('.title-location');

title_dropdown_location.onclick = function() {
  dropdown_location.classList.toggle('open');
};
document.querySelector('.arrow').onclick = function(){
  dropdown_location.classList.toggle('open');
}
title_dropdown_language.onclick = function() {
    dropdown_language.classList.toggle('open');
};

title_dropdown_country.onclick = function() {
    dropdown_country.classList.toggle('open');
};

document.querySelector('.search_button').onclick = function(){
    document.querySelector('.input_search').classList.toggle('open');
    document.querySelector('.header_bottom_menu').classList.toggle('open');
    document.querySelector('.navigation').classList.toggle('open');
    document.querySelector('.logo').classList.toggle('open');
}



let navigation_header = document.querySelector('.header_menu')
let links = navigation_header.querySelectorAll('.link')


navigation_header.addEventListener('click', (event) => {
  let target = event.target;
  
  if(target.classList.contains('link')) {
    for(let i = 0; i < links.length; i++) {
      links[i].classList.remove('active');
    }
    target.classList.add('active');
  }
  
});

function openCity(evt, tabl) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabl).style.display = "block";
  evt.currentTarget.className += " active";
}


let tabs = document.querySelector('.tabs');
let tab_content = tabs.querySelector(".content")
let dropdown_items = document.querySelectorAll('.dropdown_item')

tab_content.addEventListener('click', (event) => {
  let target = event.target;
  if(target.tagName != 'SPAN') return
  for(let i = 0; i < dropdown_items.length; i++) {
    dropdown_items[i].classList.remove('active');
  }
  let one = target.closest('.dropdown_item');
  one.classList.toggle('active')
});

