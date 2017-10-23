<?php
/**
 * amorphous functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package amorphous
 */

if ( ! function_exists( 'amorphous_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function amorphous_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on amorphous, use a find and replace
		 * to change 'amorphous' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'amorphous', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'menu-1' => esc_html__( 'Primary', 'amorphous' ),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'amorphous_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );
	}
endif;
add_action( 'after_setup_theme', 'amorphous_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function amorphous_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'amorphous_content_width', 640 );
}
add_action( 'after_setup_theme', 'amorphous_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function amorphous_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'amorphous' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'amorphous' ),
		'before_widget' => '<section class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );
	register_sidebar( array(
		'name'          => esc_html__( 'Footer Left', 'amorphous' ),
		'id'            => 'footer-left',
		'description'   => esc_html__( 'Add widgets here.', 'amorphous' ),
		'before_widget' => '<section class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );
	register_sidebar( array(
		'name'          => esc_html__( 'Footer Right', 'amorphous' ),
		'id'            => 'footer-right',
		'description'   => esc_html__( 'Add widgets here.', 'amorphous' ),
		'before_widget' => '<section class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );
}
add_action( 'widgets_init', 'amorphous_widgets_init' );

add_filter( 'request', function( $query_string ) {

	if ($query_string['name'] == 'page' && isset($query_string['page'])) {
		unset($query_string['name']);
		// 'page' in the query_string looks like '/2', so i'm spliting it out
		list($delim, $page_index) = split('/', $query_string['page']);
		$query_string['paged'] = $page_index;
	}
	if(isset($query_string['code_category']) && isset($query_string['paged'])){
		$query_string['post_type'] = get_post_types($args = array(
			'public'   => true,
			'_builtin' => false
		));
		array_push($query_string['post_type'],'post');
	}

	return $query_string;
});


add_action( 'rest_api_init', 'register_api_hooks' );
function register_api_hooks() {
	global $post;
	$postObjects = [ 'post', 'card' ];
	/**
	 * Add the plaintext content to GET requests for individual posts
	 */
	register_rest_field( $postObjects, 'plaintext', [
		'get_callback' => 'rest_field_plaintext'
	]);
	register_rest_field( $postObjects, 'plaintitle', [
		'get_callback' => 'rest_field_plaintitle'
	]);
	register_rest_field( $postObjects, 'post_excerpt', [
		'get_callback' => 'rest_field_excerpt'
	]);
	register_rest_field( $postObjects, 'post_permalink', [
		'get_callback' => 'rest_field_permalink'
	]);
	register_rest_field( $postObjects, 'post_code_cat_tax', [
		'get_callback' => 'rest_field_code_cat_tax'
	]);

	register_rest_route( 'amorph/v2', 'querypage/(?P<pageId>[\d]+)/(?P<sourcePageId>[\d]+)', [
		'methods' => WP_REST_Server::READABLE,
		'callback' => 'theme_rest_pagination',
		'args' => [ 'postObject' => $post ],
		'permission_callback' => 'checkPermissions'
	]);

	register_rest_route( 'wp_query', 'args', array(
		'methods'             => WP_REST_Server::READABLE,
		'callback'            => 'get_items',
		'permission_callback' => 'checkPermissions'
	) );


	//rest_authorization_required_code()
}

function get_items( WP_REST_Request $request ) {
	$params = $request->get_query_params();

	$default_args = array(
		'post_status'     => 'publish',
		'posts_per_page'  => 10,
		'has_password'    => false
	);

	// Combine defaults and query_args
	$args = wp_parse_args( $query_args, $default_args );
	// Run query
	$wp_query = new WP_Query( $args );

	$data = array();

	return rest_ensure_response( $wp_query );
	/*while ( $wp_query->have_posts() ) : $wp_query->the_post();

		// Extra safety check for unallowed posts
		if ( $this->check_is_post_allowed( $wp_query->post ) ) {

			// Update properties post_type and meta to match current post_type
			// This is kind of hacky, but the parent WP_REST_Posts_Controller
			// does all kinds of assumptions from properties $post_type and
			// $meta so we need to update it several times.
			$this->post_type = $wp_query->post->post_type;
			$this->meta = new WP_REST_Post_Meta_Fields( $wp_query->post->post_type );

			// Use parent class functions to prepare the post
			$itemdata = parent::prepare_item_for_response( $wp_query->post, $request );
			$data[]   = parent::prepare_response_for_collection( $itemdata );
		}

	endwhile;

	return $this->get_response( $request, $args, $wp_query, $data );*/
}

function checkPermissions() {
	return true;
}

function theme_rest_pagination( WP_REST_Request $request ) {
	$params = $request->get_params();
	$queryParams = $request->get_query_params();
	$pageNum = absint( $params['pageId'] );
	$sourcePageId = absint( $params['sourcePageId'] );
	$perPage = 5;
	$bignum = 999999999;

	$category = isset( $queryParams['category'] ) ? $queryParams['category'] : '';

	$sourcePage = get_post( $sourcePageId );
	$sourcePageType = get_post_type( $sourcePage );

	$sourcePageBase = str_replace( $bignum, '%#%', esc_url( trailingslashit( get_permalink( $sourcePage->ID ) . $sourcePageType . '/' . $bignum ) ) );

	$args = [
		'post_type' => 'card',
		'posts_per_page' => $perPage,
		'paged' => $pageNum
	];

	if ( $category ) {
		$args['tax_query'] = [[
			'taxonomy' => 'code_category',
			'field' => 'slug',
			'terms' => $category
		]];
	}

	$query = new WP_Query( $args );

	$data = paginate_links( array(
		'base'         => $sourcePageBase,
		'format'       => '',
		'current'      => max( 1, $pageNum ),
		'total'        => $query->max_num_pages,
		'prev_text'    => '&larr;',
		'next_text'    => '&rarr;',
		'type'         => 'list',
		'end_size'     => 3,
		'mid_size'     => 3
	) );

	wp_reset_query();

	return rest_ensure_response( $data );
}

add_action('wp_head', function() {
	global $template;
	//var_dump($template);
});

add_filter( 'json_excerpt_more', 'json_excerpt_more' );

function json_excerpt_more( $output ) {
	return '';
}


// Return plaintext content for posts, cards
function rest_field_plaintext( $object, $fieldname, $request ) {
	return strip_tags( html_entity_decode( $object['content']['rendered'] ) );
}

function rest_field_plaintitle( $object, $fieldname, $request ) {
	return strip_tags( html_entity_decode( $object['title']['rendered'] ) );
}

function rest_field_excerpt( $object, $fieldname, $request ) {
	remove_filter( 'excerpt_more', [ lib\Filters\Posts::class, 'theme_excerpt_more' ], 10 );
	$output = strip_tags( html_entity_decode( get_the_excerpt( $object['id'] ) ) );
	$output .= apply_filters( 'json_excerpt_more', $output );

	return $output;
}

function rest_field_permalink( $object, $fieldname, $request ) {
	return get_permalink( $object['id'] );
}

function rest_field_code_cat_tax( $object, $fieldname, $request ) {
	$codeCatIds = $object['code_category'];
	$termOutput = [];

	$counter = 0;
	foreach ( $codeCatIds as $catId ) {
		$name = get_term_field( 'name', $catId, 'code_category' );
		$termLink = get_term_link( $catId, 'code_category' );

		$termOutput[$counter]['name'] = $name;
		$termOutput[$counter]['link'] = $termLink;
		$counter++;
	}
	return $termOutput;
}

// Disable REST API user endpoints
add_filter( 'rest_endpoints', function( $endpoints ){
	if ( isset( $endpoints['/wp/v2/users'] ) ) {
		unset( $endpoints['/wp/v2/users'] );
	}
	if ( isset( $endpoints['/wp/v2/users/(?P<id>[\d]+)'] ) ) {
		unset( $endpoints['/wp/v2/users/(?P<id>[\d]+)'] );
	}
	return $endpoints;
});

add_filter( 'pre_get_posts', 'filterSearchResults', 10, 1 );
/**
 * Filter search results by post types set explicitly in $query->set
 *
 * @param WP_Query $query
 * @return WP_Query
 */
function filterSearchResults( WP_Query $query ) {
	// ignore flag for admin or if we're not on search results page
	$ignore = ( is_admin() || !$query->is_search() );
	if ( !$ignore && $query->is_search() ):
		//$query->set( 'post_type', [ 'page', 'post' ] );
	endif;

	return $query;
}
global $wp_filter;
//var_dump($wp_filter['pre_get_posts']);

/**
 * Enqueue scripts and styles.
 */
function amorphous_scripts() {
	wp_enqueue_style( 'amorphous-style', get_stylesheet_uri() );
	wp_enqueue_style( 'fa', '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' );
	wp_enqueue_style( 'extracted-css', get_stylesheet_directory_uri() . '/dist/styles.css' );
	wp_enqueue_style( 'slider-css', '//cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.2.4/tiny-slider.css' );
	wp_enqueue_script( 'build-main', get_stylesheet_directory_uri() . '/dist/bundle.js', array(), '', true );
	//wp_enqueue_script( 'build-main', get_template_directory_uri() . '/build/js/app.js', array(), '', true );
	global $post;

	$logo = get_custom_logo();

	wp_localize_script( 'build-main', 'globalPost', [
		'postID' => $post->ID
	]);
	//$mainMenu = wp_get_nav_menu_items( 'Main' );
	$mainMenu = wp_nav_menu( array(
		'echo' => FALSE,
		'menu' => 'Main',
		'theme_location' => 'menu-1',
		'container' => FALSE,
		'menu_class' => 'navbar-menu navbar-end',
		'walker' => new lib\Menu\MenuWalker()
	) );
	wp_localize_script( 'build-main', 'mainMenu', $mainMenu );
	wp_localize_script( 'build-main', 'themeApi', [
		'home' => home_url(),
		'logo' => $logo,
		'main' => home_url( '', 'rest' ) . '/wp-json/',
		'rest' => home_url( '', 'rest' ) . '/wp-json/amorphous-theme/v1/'
	]);


	$queried_object = get_queried_object();
	$local = [
		'queriedObject' => $queried_object
	];
	$local['taxonomy'] = get_taxonomy( $queried_object->taxonomy );

	wp_localize_script( 'build-main', 'settings', $local );
}
add_action( 'wp_enqueue_scripts', 'amorphous_scripts' );

require_once get_template_directory() . '/autoloader.php';

add_action( 'init', function() {
	new lib\CPT\Taxonomy();
	new lib\CPT\CPT();
});

//new lib\Rest\WpQueryRoute();
new lib\Filters\Posts();
new lib\Sidebar\Widgets();
new lib\Widgets\CategoryListWidget();

add_action( 'widgets_init', function() {
	register_widget( lib\Widgets\CategoryListWidget::class );
});
/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}
