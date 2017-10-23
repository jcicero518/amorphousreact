/*global themeApi */

class Tabs {

    constructor() {
        this.$root = document.querySelector( '[data-tabs-root]' );
        this.$nav = this.$root.querySelector( '[data-tabs-nav]' );
        this.$tabs = this.$root.querySelectorAll( '.tab' );

        this.$root.addEventListener( 'click', this.onTabClick.bind( this ) );

        this.onTabClick = this.onTabClick.bind( this );
        this.showTab = this.showTab.bind( this );
        this.hideTab = this.hideTab.bind( this );
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
        tabParent.classList.add( 'is-active' );

        this.$tabs.forEach( t => {
            if ( t.getAttribute( 'aria-controls') !== contentControls ) {
                t.setAttribute( 'aria-selected', false );
                t.parentElement.classList.remove( 'is-active' );
            }
        });

        let tabPanels = this.$root.querySelectorAll( '.tab-panel' );
        tabPanels.forEach( panel => {
           panel.getAttribute( 'aria-controls' ) === contentControls
               ? panel.setAttribute( 'aria-hidden', false )
               : panel.setAttribute( 'aria-hidden', true );
        });
    }

    hideTab( tab ) {
        let
            contentControls = tab.getAttribute( 'aria-controls'),
            tabParent = tab.parentElement;

        tab.setAttribute( 'aria-selected', false );
        tabParent.classList.remove( 'is-active' );

        let tabPanels = this.$root.querySelectorAll( '.tab-panel' );
        tabPanels.forEach( panel => {
            panel.getAttribute( 'aria-controls' ) === contentControls
                ? panel.setAttribute( 'aria-hidden', true )
                : panel.setAttribute( 'aria-hidden', false );
        });
    }
}

if ( document.querySelector( '[data-tabs-root]' ) ) {
    new Tabs();
}