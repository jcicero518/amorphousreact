
const sliderContainer = document.querySelector( '.site-carousel' );

class Slider {

    constructor( sliderOptions ) {
        /*const defaultOptions = {
            cellAlign: 'left',
            setGallerySize: false,
            contain: true,
            prevNextButtons: true,
            pageDots: false,
            wrapAround: true,
            autoPlay: 5000,
            percentPosition: false
        };*/

        this.sliderOptions = Object.assign( defaultOptions, sliderOptions );
        this.slider = new Flickity( sliderContainer, this.sliderOptions );
    }
}

// Conditionally load slider - if sliderContainer element exists
if ( sliderContainer ) {
    // optionally pass in object to add / override default options
    document.addEventListener( 'DOMContentLoaded', evt => {
        //new Slider();
    });

}