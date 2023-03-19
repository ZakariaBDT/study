<?php
/**
 * Plugin Name:       Controls Study
 * Description:       Study on how to create custom controls for Gutenberg blocks.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Zakaria Binsaifullah
 * Author URI:        https://makegutenblock.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       boilerplate
 *
 * @package           @wordpress/create-block 
 */

 /**
  * @package Zero Configuration with @wordpress/create-block
  *  [boilerplate] && [BOILERPLATE] ===> Prefix
  */

// Stop Direct Access 
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Blocks Final Class
 */

final class BOILERPLATE_BLOCKS_CLASS {
	public function __construct() {

		// define constants
		$this->boilerplate_define_constants();

		// block initialization
		add_action( 'init', [ $this, 'boilerplate_blocks_init' ] );

		// blocks category
		if( version_compare( $GLOBALS['wp_version'], '5.7', '<' ) ) {
			add_filter( 'block_categories', [ $this, 'boilerplate_register_block_category' ], 10, 2 );
		} else {
			add_filter( 'block_categories_all', [ $this, 'boilerplate_register_block_category' ], 10, 2 );
		}

		// enqueue block assets
		add_action( 'enqueue_block_assets', [ $this, 'boilerplate_external_libraries' ] );

		// enqueue block editor assets
		// add_action( 'enqueue_block_editor_assets', [ $this, 'boilerplate_editor_scripts' ] );
	}

	/**
	 * Enqueue Block Editor Assets
	 */
	// public function boilerplate_editor_scripts() {
	// 	// module js
	// 	$path = plugin_dir_path( __FILE__ ) . 'build/modules.asset.php';
	// 	$modules_dependencies = file_exists ( $path ) ? require $path : array(
	// 		'dependencies' => array(),
	// 		'version' => BOILERPLATE_VERSION
	// 	);

	// 	wp_register_script (
	// 		'boilerplate-editor-modules',
	// 		plugins_url( 'build/modules.js', __FILE__ ),
	// 		$modules_dependencies['dependencies'],
	// 		$modules_dependencies['version'],
	// 		true
	// 	);

	// 	// enqueue module js
	// 	wp_enqueue_script( 'boilerplate-editor-modules' );
	// }

	/**
	 * Initialize the plugin
	 */

	public static function init(){
		static $instance = false; 
		if( ! $instance ) {
			$instance = new self();
		}
		return $instance;
	}

	/**
	 * Define the plugin constants
	 */
	private function boilerplate_define_constants() {
		define( 'BOILERPLATE_VERSION', '1.0.0' );
		define( 'BOILERPLATE_URL', plugin_dir_url( __FILE__ ) );
		define( 'BOILERPLATE_INC_URL', BOILERPLATE_URL . 'includes/' );		
	}

	/**
	 * Blocks Registration 
	 */

	public function boilerplate_register_block( $name, $options = array() ) {
		register_block_type( __DIR__ . '/build/blocks/' . $name, $options );
	 }

	/**
	 * Blocks Initialization
	*/
	public function boilerplate_blocks_init() {
		// register single block
		$this->boilerplate_register_block( 'bootstrap' );
		$this->boilerplate_register_block( 'advanced-button', [
			'render_callback' =>[ $this, 'boilerplate_render_block']
		] );
	}

	/**
	 * Render Block
	 */
	public function boilerplate_render_block( $attributes, $content ) {
		$uniqueId = $attributes['uniqueId'];
		$blockStyle = $attributes['blockStyle'];

		// print_r($blockStyle);

		// register inline style
		wp_register_style( $uniqueId, false );
		wp_enqueue_style( $uniqueId );
		wp_add_inline_style( $uniqueId, $blockStyle );

		return $content;
	}

	/**
	 * Register Block Category
	 */

	public function boilerplate_register_block_category( $categories, $post ) {
		return array_merge(
			array(
				array(
					'slug'  => 'boilerplate',
					'title' => __( 'Boilerplate', 'boilerplate' ),
				),
			),
			$categories,
		);
	}

	/**
	 * Enqueue Block Assets
	 */
	public function boilerplate_external_libraries() {
		// enqueue JS
		wp_enqueue_script( 'boilerplate-lib', BOILERPLATE_INC_URL . 'js/plugin.js', array(), BOILERPLATE_VERSION, true );
	}

}

/**
 * Kickoff
*/

BOILERPLATE_BLOCKS_CLASS::init();
