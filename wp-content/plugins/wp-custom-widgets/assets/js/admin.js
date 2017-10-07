(function($) {
    var attrs = {};
    var container = document.querySelector( '.wp-custom-widgets-related-wrapper' );
    var widgetAttrsElem = container.querySelector( '.is-hidden-widget-attrs' );
    var addButton = container.querySelector( '.button-add-row' );

    function setAttrs() {
        var data = widgetAttrsElem.dataset;
        console.log(data, 'data');
    }
    addButton.addEventListener( 'click', function( event ) {
        console.log(event, 'event');
        setAttrs();
    });

    setAttrs();
    // https://core.trac.wordpress.org/browser/branches/4.8/src/wp-admin/js/widgets.js
    $(function() {
        $(document).on('click.widgets-toggle', function( event ) {
           console.log(event, 'postbox ');
        });
    })

})(jQuery);