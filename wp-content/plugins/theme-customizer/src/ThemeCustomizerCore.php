<?php

namespace Amorphous\ThemeCustomizer;

use BrightNucleus\Config\ConfigInterface;
use BrightNucleus\Config\ConfigTrait;
use BrightNucleus\Config\Exception\FailedToProcessConfigException;
use BrightNucleus\Settings\Settings;

class ThemeCustomizerCore {

  use ConfigTrait;

  /**
   * Static instance of the plugin.
   *
   * @since 0.1.0
   *
   * @var self
   */
  protected static $instance;

  /**
   * Instantiate a Plugin object.
   *
   * Don't call the constructor directly, use the `Plugin::get_instance()`
   * static method instead.
   *
   * @since 0.1.0
   *
   * @throws FailedToProcessConfigException If the Config could not be parsed correctly.
   *
   * @param ConfigInterface $config Config to parametrize the object.
   */
  public function __construct( ConfigInterface $config ) {
    $this->processConfig( $config );
  }

  /**
   * Get a reference to the Plugin instance.
   *
   * @since 0.1.0
   *
   * @throws FailedToProcessConfigException If the Config could not be parsed correctly.
   *
   * @param ConfigInterface $config Optional. Config to parametrize the
   *                                object.
   * @return self
   */
  public static function get_instance( ConfigInterface $config = null ) {
    if ( ! self::$instance ) {
      self::$instance = new self( $config );
    }

    return self::$instance;
  }

  /**
   * Launch the initialization process.
   *
   * @since 0.1.0
   */
  public function run() {
    add_action( 'plugins_loaded', [ $this, 'load_textdomain' ] );

    // Initialize admin page.
    $admin_page = new Settings( $this->config->getSubConfig( 'Settings' ) );
    $admin_page->register();
  }

  /**
   * Load the plugin text domain.
   *
   * @since 0.1.0
   */
  public function load_textdomain() {
    load_plugin_textdomain( $this->config->getKey( 'Plugin/textdomain' ) );
  }
}