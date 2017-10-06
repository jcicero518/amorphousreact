<?php

namespace lib\Filters;

use WP_Post;
use lib\Posts\Card;

class Layout {

	protected $layout;
	protected $postId;

	public function __construct( WP_Post $post ) {
		$this->setPostId( $post->ID );
		$this->setLayout();
		$this->initFilters();
	}

	public function initFilters() {
		add_filter( 'theme_page_layout', function( $layoutArgs = [] ) {
			$category = isset( $layoutArgs['category'] ) ? $layoutArgs['category'] : NULL;
			$postType = isset( $layoutArgs['postType'] ) ? $layoutArgs['postType'] : NULL;

			switch ( $layoutArgs['layout'] ) {
				case 'twocol':
					?>
					<div class="columns">
						<div class="column is-9">
							<div class="box">
								<?php
								while ( have_posts() ) : the_post();
									?>
									<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
										<header class="entry-header">
											<?php the_title( '<h1 class="title">', '</h1>' ); ?>
										</header><!-- .entry-header -->

										<div class="entry-content">
											<?php the_content(); ?>
											<?php if ( $postType ): ?>
												<?= apply_filters( 'theme_display_posts', [ 'postType' => $postType ] ); ?>
											<?php endif; ?>
										</div><!-- .entry-content -->

										<footer class="entry-footer">
										</footer><!-- .entry-footer -->

									</article><!-- #post-<?php the_ID(); ?> -->
									<?php
									// If comments are open or we have at least one comment, load up the comment template.
									if ( comments_open() || get_comments_number() ) :
										comments_template();
									endif;

								endwhile; // End of the loop.

								//$cards = new Card();
								//$output = $cards->getQuery();
								?>
							</div>

						</div>
						<div class="column">
							<div class="box">
								<?php get_sidebar(); ?>
							</div>
						</div>
					</div>
					<?php
				break;
				case 'full':
					?>
					<div class="box">
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
					<?php
				break;
			}
		}, 10, 1 );
	}

	private function setPostId( $postId ) {
		$this->postId = $postId;
	}

	public function setLayout() {
		$acfLayout = get_field( 'layout', $this->postId );
		$this->layout = ( !empty( $acfLayout ) ) ? $acfLayout : 'twocol';
	}

	public function getLayout() : string {
		return $this->layout;
	}
}