let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;

        console.log(tabNav)

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        console.log('selectedTab');
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }

};

document.addEventListener("DOMContentLoaded", () => tab());
////////////////////////////
function toggle3(){
	var blur = document.getElementById('blur');
	blur.classList.toggle('active');
	var forms = document.getElementById('forms');
	forms.classList.toggle('active');
}
////////////////////////////
function toggle2(){
	var back = document.getElementById('back');
	back.classList.toggle('active');
	var front = document.getElementById('front');
	front.classList.toggle('active');
}
/////////////////////////////

////////////////////////////
function toggle()
{
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var plus = document.getElementById('plus');
    plus.classList.toggle('active');
}
////////////////////////////

////////////////////////////
function show(state)
{
    document.getElementById('window').style.display = state;	
    document.getElementById('gray').style.display = state; 		
}
/////////////////////////////
function readMore(){
	var more = document.getElementById('more');
	var dots = document.getElementById('dots');
	var swit = document.getElementById('swit');
	var swit2 = document.getElementById('swit2');

	if(dots.style.display === "none"){
		more.style.display="none";
		dots.style.display="inline";
		swit2.classList.remove('active');
		swit.classList.add('active');
	}
	else{
		more.style.display="inline";
		dots.style.display="none";
		swit.classList.remove('active');
		swit2.classList.add('active');
	} 
}
/////////////////////////////////
function plusInformation(){
	var money = document.getElementById('money');
	var search2 = document.getElementById('search2');

	if(search2.style.display === "none"){
		money.style.display="none";
		search2.style.display="inline";
	}
	else{
		money.style.display="inline";
		search2.style.display="none";
	} 
}
////////////////////////////////////
function f_Date(el,n) {
	el.value = el.value.replace(/[^0-9]/g,'');
	if(el.value.length>n)el.value=el.value.substr(n);
	if(el.value.length==n) el.nextSibling.nextSibling.focus();
  }
