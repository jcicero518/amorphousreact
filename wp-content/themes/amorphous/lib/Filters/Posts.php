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

			if ( $postType === 'site' ) {
				$args['meta_key'] = 'site_order';
				$args['order_by'] = 'meta_value_num';
				$args['order'] = 'ASC';
			}

			$query = new \WP_Query( $args );

			if ( $postType === 'site' ) {
              ?>
              <h2 class="title">Recent Sites</h2>
              <?php
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

	function theme_site_query( \WP_Query $query ) {
		while ( $query->have_posts() ):
			$query->the_post();
			?>
			<div class="box box--site">
				<header class="entry-header">
					<!--<h2 class="title">
						<a
							href="<?= esc_url( get_permalink( $query->post->ID ) ); ?>">
							<?= get_the_title( $query->post->ID); ?>
						</a>
					</h2>-->
					<h2 class="title"><?= get_the_title( $query->post->ID ); ?></h2>
					<!--<div class="entry-meta">
                    <p><label>Full Site: </label><a target="_blank" title="" href="<?= get_field( 'site_url'); ?>"><?= get_field( 'site_url' ); ?></a></p>
                  </div>-->
				</header>

				<div class="entry-content">

					<div class="card">
						<div class="card-image">
							<?php
							$siteImageField = get_field( 'site_image' );
							$siteImages = [
								'id' => $siteImageField['id'],
								'caption' => $siteImageField['caption'],
								'thumbnail' => $siteImageField['sizes']['thumbnail'],
								'full' => $siteImageField['url']
							];
							?>
							<figure
								class="image card-image-figure square"
								style="background-image: url(<?= $siteImages['thumbnail']; ?>)"
								data-image-full="<?= $siteImages['full']; ?>">
								<img src="<?= $siteImages['thumbnail'] ?>" />
							</figure>
						</div>
						<div class="card-content is-clearfix">
							<?= apply_filters( 'the_content', get_the_content( $query->post->ID ) ); ?>
						</div>
						<footer class="card-footer">

							<p class="card-footer-item">
								<span>Full Site: <a target="_blank" title="Opens in new window" href="<?= get_field( 'site_url'); ?>"><?= get_field( 'site_url' ); ?></a></span>
							</p>
						</footer>
					</div>

				</div>
			</div>
			<?php
		endwhile;
	}

	function theme_display_sites( \WP_Query $query ) {

		if ( $query->have_posts() ): ?>
          <div class="boxes-container">
			  <div class="tabs is-centered" role="tablist" aria-multiselectable="false" data-tabs-root>

					  <ul role="tablist">
						  <li class="is-active" role="presentation">
							  <a href="#" class="tab" id="site_tab_0" role="tab" aria-controls="site_content_1" tabindex="0" aria-selected="true">
								  <span class="icon is-small"><i class="fa fa-code-fork"></i></span>
								  <span>Freelance</span>
							  </a>
						  </li>
						  <li role="presentation">
							  <a href="#" class="tab" id="site_tab_1" role="tab" aria-controls="site_content_2" tabindex="-1" aria-selected="false">
								  <span class="icon is-small"><i class="fa fa-code-fork"></i></span>
								  <span>Agency</span>
							  </a>
						  </li>
					  </ul>

				  <div class="tabs-container">
					  <div class="tab-panel"
						   role="tabpanel"
						   aria-controls="site_content_1"
						   aria-labelledby="site_tab_0"
						   aria-hidden="false"
						   aria-expanded="true">
						  <?php
						  $args = wp_parse_args( [ 'tag' => 'freelance' ], $query->query_vars );
						  $siteQuery = new \lib\Query\SiteQuery( $args );
						  $this->theme_site_query( $siteQuery );
						  ?>
					  </div>
					  <div class="tab-panel"
						   role="tabpanel"
						   aria-controls="site_content_2"
						   aria-labelledby="site_tab_1"
						   aria-hidden="true"
						   aria-expanded="false">
						  <?php
						  $args = wp_parse_args( [ 'tag' => 'zone5', 'posts_per_page' => '10' ], $query->query_vars );
						  $siteQuery = new \lib\Query\SiteQuery( $args );
						  $this->theme_site_query( $siteQuery );
						  ?>
					  </div>
				  </div>

			  </div>
          </div>
          <?php
        endif;
	}
}