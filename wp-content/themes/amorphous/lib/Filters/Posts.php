<?php

namespace lib\Filters;

use lib\Posts\Card;

class Posts {

	public function __construct() {
		$this->initFilters();
	}

	private function initFilters() {
		add_filter( 'excerpt_more', [ __CLASS__, 'theme_excerpt_more' ], 10, 1 );

		add_filter( 'theme_display_cards', function( $args = [] ) {
			$category = isset( $args['category'] ) ? $args['category'] : 'ALL';

			ob_start();

			$cards = new Card();
			echo $cards->getQuery();

			$output = ob_get_contents();
			ob_end_clean();
			return $output;
		}, 10, 1);

		add_filter( 'theme_display_sites', function( $args = [] ) {

		});

		add_filter( 'theme_display_posts', function( $args = [] ) {
			$category = isset( $args['category'] ) ? $args['category'] : NULL;
			$postType = isset( $args['postType'] ) ? $args['postType'] : NULL;

			ob_start();

			if ( get_query_var('paged') ) {
				$paged = get_query_var('paged');
			} elseif ( get_query_var('page') ) { // 'page' is used instead of 'paged' on Static Front Page
				$paged = get_query_var('page');
			} else {
				$paged = 1;
			}

			$args['post_type'] = $postType;
			$args['paged'] = $paged;
			$args['posts_per_page'] = 5;

			if ( $category && $postType === 'card' ) {
				$args['tax_query'] = [[
					'taxonomy' => 'code_category',
					'field' => 'slug',
					'terms' => $category
				]];
			}

			$query = new \WP_Query( $args );

			if ( $postType === 'site' ) {
				echo '<h2>Recently Built Sites</h2>';
				$this->theme_display_sites( $query );
				return;
			}
			?>
			<div id="content-inner-replace" class="boxes-container replace-<?= $postType; ?>"></div>

			<?php
			theme_page_navi( $query );
			$output = ob_get_contents();
			ob_end_clean();
			return $output;
		}, 10, 1);
	}

	function theme_excerpt_more( $more ) {
		global $post;
		$more = "<br /><br />";
		$more .= '<a class="button" href="' . get_permalink( $post->ID ) . '">Read More &raquo;</a>';
		$more .= '';
		return $more;
	}

	function theme_display_sites( \WP_Query $query ) {
		if ( $query->have_posts() ):
				?>
				<div class="boxes-container">
				<?php

					while ( $query->have_posts() ):
						$query->the_post();
						?>
						<div class="panel box">
							<header class="entry-header">
								<h2 class="title">
									<a
										href="<?= esc_url( get_permalink( $query->post->ID ) ); ?>">
										<?= get_the_title( $query->post->ID); ?>
									</a>
								</h2>
								<div class="entry-meta">
									<p><a target="_blank" title="" href="<?= get_field( 'site_url'); ?>"><?= get_field( 'site_url' ); ?></a></p>
								</div>
							</header>
							<div class="entry-content">
								<div class="site-carousel">
									<div class="slide">
										<img src="http://via.placeholder.com/650x250" />
									</div>
									<div class="slide">
										<img src="http://via.placeholder.com/630x230" />
									</div>
								</div>
								<?= wp_get_attachment_image( get_field( 'site_image' )['id'], 'full' ); ?>
								<?= apply_filters( 'the_content', get_the_content( $query->post->ID ) ); ?>
							</div>
						</div>
						<?php
					endwhile;

			endif;
	}
}