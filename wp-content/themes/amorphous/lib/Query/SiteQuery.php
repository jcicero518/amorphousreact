<?php

namespace lib\Query;

use WP_Query;

class SiteQuery extends WP_Query {

	private $tag;

	public function __construct($query) {
		$query['post_type'] = 'site';
		parent::__construct($query);
	}

	public function getQuery() {
		return $this->query;
	}
}