<?php
/**
 * Template part for displaying posts
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package amorphous
 */
?>

<div class="columns">
	<div class="columns is-12">
		<div class="box">
			<header class="entry-header">
				<?php

				if ( is_singular() ) :
					the_title( '<h1 class="entry-title">{ ', ' }</h1>' );
				else :
					the_title( '<h2 class="subtitle"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
				endif;

				if ( 'post' === get_post_type() || 'site' === get_post_type() ) : ?>
					<div class="entry-meta">
						<?php //amorphous_posted_on(); ?>
					</div><!-- .entry-meta -->
					<div class="entry-meta">
						<?php //amorphous_term_list( get_the_ID(), 'code_category' ); ?>
					</div>
					<?php
					$slider_args = [
						'post_type' => 'slider'
					];
					$sliderQuery = new WP_Query( $slider_args );
					while ( $sliderQuery->have_posts() ):
						$sliderQuery->the_post();
						//var_dump(get_post_custom( $sliderQuery->post->ID));
						//var_dump(get_field('is_for_site'));
					endwhile;
					wp_reset_postdata();
				endif; ?>
			</header><!-- .entry-header -->
			<!--<div class="slider js_slider">
				<div class="frame js_frame">
					<ul class="slides js_slides">
						<li class="js_slide"><?= wp_get_attachment_image( get_field( 'site_image' )['id'], 'full' ); ?></li>
					</ul>
				</div>
				<span class="js_prev prev">
					<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5"><g><path fill="#2E435A" d="M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z"/></g></svg>
				</span>
				<span class="js_next next">
					<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5"><g><path fill="#2E435A" d="M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z"/></g></svg>
				</span>
			</div>-->
			<div class="box">
				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

					<div class="entry-content">
						<?php
						wp_get_attachment_image( get_field( 'site_image' )['id'], 'full' );
						the_content( sprintf(
							wp_kses(
							/* translators: %s: Name of current post. Only visible to screen readers */
								__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'amorphous' ),
								array(
									'span' => array(
										'class' => array(),
									),
								)
							),
							get_the_title()
						) );

						wp_link_pages( array(
							'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'amorphous' ),
							'after'  => '</div>',
						) );
						?>
					</div><!-- .entry-content -->

					<footer class="entry-footer">

					</footer><!-- .entry-footer -->
				</article><!-- #post-<?php the_ID(); ?> -->
			</div>
		</div>
	</div>
</div>

