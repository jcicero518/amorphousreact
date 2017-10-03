<?php
/**
 * Template Name: Home Page
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package amorphous
 */

get_header(); ?>
	<section class="section">
		<div class="container">
			<?php
			while ( have_posts() ) : the_post();

				get_template_part( 'template-parts/content', 'page' );

				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;

			endwhile; // End of the loop.
			?>
		</div>
	</section>
	<!--<div id="app"></div>-->

<?php
//get_sidebar();
get_footer();
