<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package amorphous
 */

get_header(); ?>

	<section class="section">
		<div class="container">
			<div class="columns">
				<div class="column is-two-thirds">
					<?php
					while ( have_posts() ) : the_post();

						get_template_part( 'template-parts/content', 'page' );

						// If comments are open or we have at least one comment, load up the comment template.
						if ( comments_open() || get_comments_number() ) :
							comments_template();
						endif;

					endwhile; // End of the loop.

					$cards = new lib\Posts\Card();
					$output = $cards->getQuery();
					?>
				</div>
				<div class="column">
					<?php get_sidebar(); ?>
				</div>
			</div>

		</div>
	</section>
	<!--<div id="app"></div>-->

<?php
get_footer();
