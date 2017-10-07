(function($) {
    var ourWidgetAttrs = {
        id_base: 'related_links_widget'
    };
    var ourWidgetFlags = {
        is_open: false,
        is_ours: false
    };
    var container = document.querySelector( '.wp-custom-widgets-related-wrapper' );
    var widgetAttrsElem = container.querySelector( '.is-hidden-widget-attrs' );
    var addButton = container.querySelector( '.button-add-row' );

    function locateToggledWidget( $toggleTarget ) {
        var
            $widgetInside,
            $toggleBtn,
            $thisWidget = $toggleTarget.closest( '.widget' );

        $toggleBtn = $thisWidget.find( '.widget-top button.widget-action' );
        ourWidgetFlags.is_open = $toggleBtn.parents( '.widget' ).hasClass( 'open' );

        $widgetInside = $thisWidget.find( '.widget-inside' );
        ourWidgetFlags.is_ours = ( $widgetInside.find( 'input[name="id_base"]' ).val() === ourWidgetAttrs.id_base );
    }

    function isReady() {
        return ( ourWidgetFlags.is_open && ourWidgetFlags.is_ours );
    }

    // https://core.trac.wordpress.org/browser/branches/4.8/src/wp-admin/js/widgets.js
    $(function() {
        $(document).on('click.widgets-toggle', function( event ) {
            console.log(event, 'toggle widget open / closed ');
            var $target = $( event.target );
            locateToggledWidget( $target );
            console.log(isReady(), 'isOurs');
        });

    })

})(jQuery);