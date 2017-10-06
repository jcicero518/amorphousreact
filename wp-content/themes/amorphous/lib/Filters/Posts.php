<?php

namespace lib\Filters;

use lib\Posts\Card;

class Posts {

	public function __construct() {
		$this->initFilters();
	}

	private function initFilters() {
		add_filter( 'excerpt_more', function( $more ) {
			global $post;
			$more = "<br /><br />";
			$more .= '<a class="button" href="' . get_permalink( $post->ID ) . '">Read More &raquo;</a>';
			$more .= '';
			return $more;
		});

		add_filter( 'theme_display_cards', function( $args = [] ) {
			$category = isset( $args['category'] ) ? $args['category'] : 'ALL';

			ob_start();

			$cards = new Card();
			echo $cards->getQuery();

			$output = ob_get_contents();
			ob_end_clean();
			return $output;
		}, 10, 1);

		add_filter( 'theme_display_posts', function( $args = [] ) {
			$category = isset( $args['category'] ) ? $args['category'] : 'ALL';
			$postType = isset( $args['postType'] ) ? $args['postType'] : NULL;

			ob_start();

			$args['post_type'] = $postType;
			$query = new \WP_Query( $args );
			if ( $query->have_posts() ):
				while ( $query->have_posts() ):
					$query->the_post();
					?>
					<div class="box">
						<header class="entry-header">
							<h2 class="title">
								<a
									href="<?= esc_url( get_permalink( $query->post->ID ) ); ?>">
									<?= get_the_title( $query->post->ID); ?>
								</a>
							</h2>
							<?php amorphous_term_list( $query->post->ID, 'code_category' ); ?>
						</header>
						<div class="entry-content">
							<?= get_the_excerpt( $query->post->ID ); ?>
						</div>
					</div>
					<?php
				endwhile;
			endif;

			$output = ob_get_contents();
			ob_end_clean();
			return $output;
		}, 10, 1);
	}
}