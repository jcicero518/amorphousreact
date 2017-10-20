/*global themeApi */

class Tabs {

    constructor() {
        this.$tab = undefined;
        this.$root = document.querySelector( '[data-tabs-root]' );

        this.$root.addEventListener( 'click', this.onTabClick.bind( this ) );

        this.onTabClick = this.onTabClick.bind( this );
        this.showTab = this.showTab.bind( this );
        this.hideTab = this.hideTab.bind( this );
        console.log(this, 'this');
        //this.nav = this.$root.querySelector( '[data-tabs-nav]' );
    }

    onTabClick( event ) {
        let clickTarget = event.target;
        let tab = clickTarget.nodeName === 'SPAN' ? clickTarget.parentElement : event.target;
        if ( !tab.classList.contains( 'tab' ) ) {
            return false;
        }

        event.preventDefault();
        console.log(this, 'this tab click');

        let selected = tab.getAttribute( 'aria-selected' ) === 'true';
        selected ? this.hideTab( tab ) : this.showTab( tab );
    }

    showTab( tab ) {
        let
            contentControls = tab.getAttribute( 'aria-controls'),
            tabParent = tab.parentElement;

        tab.setAttribute( 'aria-selected', true );
        tabParent.classList.add( 'is-selected' );

        let tabPanels = this.$root.querySelectorAll( '.tab-panel' );
        let panel = [...tabPanels].filter( p => p.getAttribute( 'aria-controls' ) === contentControls );
        panel[0].setAttribute( 'aria-hidden', false );
    }

    hideTab( tab ) {
        let
            contentControls = tab.getAttribute( 'aria-controls'),
            tabParent = tab.parentElement;

        tab.setAttribute( 'aria-selected', false );
        tabParent.classList.remove( 'is-selected' );
        //contentSelector.setAttribute( 'aria-hidden', true );
    }


}

new Tabs();