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
		add_filter( 'theme_page_layout', function( $layout ) {
			switch ( $layout ) {
				case 'twocol':
					?>
					<div class="columns">
						<div class="column is-two-thirds">
							<div class="box">
								<?php
								while ( have_posts() ) : the_post();

									get_template_part( 'template-parts/content', 'page' );

									// If comments are open or we have at least one comment, load up the comment template.
									if ( comments_open() || get_comments_number() ) :
										comments_template();
									endif;

								endwhile; // End of the loop.

								$cards = new Card();
								$output = $cards->getQuery();
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