//Select navbar
var navigationButton = document.querySelector('.navigation--button')
var navigation = document.querySelector('.navigation');

//Add collapsed class to element
var toggleNavigation = function () {
	navigation.classList.toggle('navigation__is-open');
};

//Set event listener on click
navigationButton.addEventListener( 'click' , toggleNavigation );