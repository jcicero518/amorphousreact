/*global themeApi */
const navBurger = document.querySelector( '.navbar-burger' );

navBurger.addEventListener( 'click', event => {
   let
       navButton = event.target,
       navButtonClass = event.target.getAttribute( 'data-target-class' ),
       navTargetElem;

    navButton.classList.contains( 'is-active' )
        ? navButton.classList.remove( 'is-active' )
        : navButton.classList.add( 'is-active' );

    navTargetElem = document.querySelector(`.${navButtonClass}`);

    if ( navTargetElem instanceof Element ) {
        navTargetElem.classList.contains( 'is-active' )
            ? navTargetElem.classList.remove( 'is-active' )
            : navTargetElem.classList.add( 'is-active' );
    }
});
