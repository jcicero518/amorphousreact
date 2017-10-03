<?php

namespace lib\Posts;

use WP_Query;
use lib\Posts\PostInterface;

class Card implements PostInterface {

	protected $args = [];
	protected $postType = 'card';
	private $query;


	public function __construct() {
		$this->setQuery();
	}

	public function getPostType() {
		return $this->postType;
	}

	public function getQuery() {
		$cards = $this->query;
		if ( $cards->have_posts() ):
			?>
			<div class="card">
				<?php
				while ( $cards->have_posts() ):
					$cards->the_post();

					?>
					<header class="card-header">
						<p class="card-header-title"><?= get_the_title( $cards->post->ID ); ?></p>
					</header>
					<div class="card-content">
						<div class="content">
							<?= get_the_content( $cards->post->ID ); ?>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
							<a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
							<br>
							<time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
						</div>
					</div>
					<footer class="card-footer">
						<a href="#" class="card-footer-item">Save</a>
						<a href="#" class="card-footer-item">Edit</a>
						<a href="#" class="card-footer-item">Delete</a>
					</footer>
					<?php
				endwhile;
				?>
			</div><!--/.card -->
			<?php
		endif;
	}

	public function setQuery() {
		$args = [
			'post_type' => $this->getPostType()
		];

		$this->query = new WP_Query( $args );
	}
}