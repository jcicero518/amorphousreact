<?php
/**
 * Foo class, does foo
 *
 * @package      Gamajo\PluginSlug
 * @author       Gary Jones
 * @copyright    2017 Gamajo
 * @license      GPL-2.0+
 */

declare( strict_types = 1 );

namespace Gamajo\PluginSlug;

/**
 * Foo class.
 */
class Foo {
	/**
	 * Bar.
	 */
	public function bar() {
		echo 'Foo::bar()';
	}

	/**
	 * Returns true, always.
	 *
	 * @return bool
	 */
	public function is_true() : bool {
		return true;
	}
}
