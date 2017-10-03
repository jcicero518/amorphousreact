<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package amorphous
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'amorphous' ); ?></a>

	<header id="masthead" class="site-header">
		<div class="site-branding">
			<?php
			the_custom_logo();
			if ( is_front_page() && is_home() ) : ?>
				<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
			<?php
			endif;
			?>
		</div><!-- .site-branding -->

	</header><!-- #masthead -->
	<nav id="site-navigation" class="main-navigation navbar">
		<div class="container">
			<div class="navbar-brand">
				<a class="navbar-item" href="http://bulma.io">
					<img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
				</a>
			</div>
			<div class="navbar-menu">
				<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e( 'Primary Menu', 'amorphous' ); ?></button>
				<?php
				wp_nav_menu( array(
					'menu' => 'Main',
					'theme_location' => 'menu-1',
					'container' => FALSE,
					'menu_class' => 'navbar-menu',
					'menu_id'        => 'primary-menu',
					'walker' => new lib\Menu\MenuWalker()
				) );
				?>
			</div>
		</div>
	</nav>