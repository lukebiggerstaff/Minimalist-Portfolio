//Select navbar
var navigation = document.querySelector('.navigation');

//Add collapsed class to element
var toggleNavigation = function () {
	navigation.classList.toggle('navigation__is-open');
};

//Set event listener on click
navigation.addEventListener( 'click' , toggleNavigation );