<?php

namespace lib\CPT;

/**
 * Class CPT
 * Custom Post Types for WP. Each post type requires a call to register_post_type(),
 * split into their own methods.
 *
 * @package lib\CPT
 */
class CPT {

	public function __construct() {
		foreach ( array_slice( get_class_methods( __CLASS__ ), 1 ) as $class_method ) {
			call_user_func( [ __CLASS__, $class_method ] );
		}
	}

	public function theme_cpt_card() {

		$labels = array(
			'name'                  => _x( 'Cards', 'Post Type General Name', 'mwcc' ),
			'singular_name'         => _x( 'Card', 'Post Type Singular Name', 'mwcc' ),
			'menu_name'             => __( 'Cards', 'mwcc' ),
			'name_admin_bar'        => __( 'Cards', 'mwcc' ),
			'archives'              => __( 'Card Archives', 'mwcc' ),
			'attributes'            => __( 'Card Attributes', 'mwcc' ),
			'parent_item_colon'     => __( 'Parent Item:', 'mwcc' ),
			'all_items'             => __( 'All Cards', 'mwcc' ),
			'add_new_item'          => __( 'Add New Card', 'mwcc' ),
			'add_new'               => __( 'Add New', 'mwcc' ),
			'new_item'              => __( 'New Card', 'mwcc' ),
			'edit_item'             => __( 'Edit Card', 'mwcc' ),
			'update_item'           => __( 'Update Card', 'mwcc' ),
			'view_item'             => __( 'View Card', 'mwcc' ),
			'view_items'            => __( 'View Cards', 'mwcc' ),
			'search_items'          => __( 'Search Cards', 'mwcc' ),
			'not_found'             => __( 'Not found', 'mwcc' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'mwcc' ),
			'featured_image'        => __( 'Featured Image', 'mwcc' ),
			'set_featured_image'    => __( 'Set featured image', 'mwcc' ),
			'remove_featured_image' => __( 'Remove featured image', 'mwcc' ),
			'use_featured_image'    => __( 'Use as featured image', 'mwcc' ),
			'insert_into_item'      => __( 'Insert into Card', 'mwcc' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Card', 'mwcc' ),
			'items_list'            => __( 'Card list', 'mwcc' ),
			'items_list_navigation' => __( 'Card list navigation', 'mwcc' ),
			'filter_items_list'     => __( 'Filter Card list', 'mwcc' ),
		);
		$args = array(
			'label'                 => __( 'Card', 'mwcc' ),
			'description'           => __( 'Card', 'mwcc' ),
			'labels'                => $labels,
			'supports'              => array( 'title', 'thumbnail', 'editor' ),
			'taxonomies'            => array( 'post_tag', 'category' ),
			'hierarchical'          => false,
			'public'                => true,
			'show_ui'               => true,
			'show_in_menu'          => true,
			'menu_position'         => 5,
			'show_in_admin_bar'     => true,
			'show_in_nav_menus'     => true,
			'can_export'            => true,
			'has_archive'           => false,
			'exclude_from_search'   => false,
			'publicly_queryable'    => true,
			'capability_type'       => 'post',
			'show_in_rest'          => true,
		);
		register_post_type( 'card', $args );
	}
	public function theme_cpt_site() {

		$labels = array(
			'name'                  => _x( 'Sites', 'Post Type General Name', 'mwcc' ),
			'singular_name'         => _x( 'Site', 'Post Type Singular Name', 'mwcc' ),
			'menu_name'             => __( 'Sites', 'mwcc' ),
			'name_admin_bar'        => __( 'Sites', 'mwcc' ),
			'archives'              => __( 'Site Archives', 'mwcc' ),
			'attributes'            => __( 'Site Attributes', 'mwcc' ),
			'parent_item_colon'     => __( 'Parent Item:', 'mwcc' ),
			'all_items'             => __( 'All Sites', 'mwcc' ),
			'add_new_item'          => __( 'Add New Site', 'mwcc' ),
			'add_new'               => __( 'Add New', 'mwcc' ),
			'new_item'              => __( 'New Site', 'mwcc' ),
			'edit_item'             => __( 'Edit Site', 'mwcc' ),
			'update_item'           => __( 'Update Site', 'mwcc' ),
			'view_item'             => __( 'View Site', 'mwcc' ),
			'view_items'            => __( 'View Sites', 'mwcc' ),
			'search_items'          => __( 'Search Sites', 'mwcc' ),
			'not_found'             => __( 'Not found', 'mwcc' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'mwcc' ),
			'featured_image'        => __( 'Featured Image', 'mwcc' ),
			'set_featured_image'    => __( 'Set featured image', 'mwcc' ),
			'remove_featured_image' => __( 'Remove featured image', 'mwcc' ),
			'use_featured_image'    => __( 'Use as featured image', 'mwcc' ),
			'insert_into_item'      => __( 'Insert into Site', 'mwcc' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Site', 'mwcc' ),
			'items_list'            => __( 'Site list', 'mwcc' ),
			'items_list_navigation' => __( 'Site list navigation', 'mwcc' ),
			'filter_items_list'     => __( 'Filter Site list', 'mwcc' ),
		);
		$args = array(
			'label'                 => __( 'Site', 'mwcc' ),
			'description'           => __( 'Site', 'mwcc' ),
			'labels'                => $labels,
			'supports'              => array( 'title', 'thumbnail', 'editor' ),
			'taxonomies'            => array( 'post_tag', 'category' ),
			'hierarchical'          => false,
			'public'                => true,
			'show_ui'               => true,
			'show_in_menu'          => true,
			'menu_position'         => 5,
			'show_in_admin_bar'     => true,
			'show_in_nav_menus'     => true,
			'can_export'            => true,
			'has_archive'           => false,
			'exclude_from_search'   => false,
			'publicly_queryable'    => true,
			'capability_type'       => 'page',
			'show_in_rest'          => true,
		);
		register_post_type( 'site', $args );
	}
}