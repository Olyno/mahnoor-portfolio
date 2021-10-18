<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'mahnoorcwy70');

/** MySQL database username */
define('DB_USER', 'mahnoorcwy70');

/** MySQL database password */
define('DB_PASSWORD', '2qTjEXbS8EN6');

/** MySQL hostname */
define('DB_HOST', 'mahnoorcwy70.mysql.db:3306');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'swGUTzSBUqkADYhWabwr/bp8Pfxd/RLyENgzt0NKvFv5AStESOdnE3Yz3AUj');
define('SECURE_AUTH_KEY',  'zSIPdqJdgBR8drNXKKUzPVX3tHnfQeBEQ3sAWKhr4HD23xkway83K26fgWCg');
define('LOGGED_IN_KEY',    'M7bnEBCzMM/Wcnfbli+IJyVKWVEXFt2MS1RK0eZEavtQfKlZR8WYq9KmGkDR');
define('NONCE_KEY',        'R+eicG3Cy0m/Uqfh21kEM3fLLSVQvow2frc4rme9pFOeOn3Vuyd+LLmE9ujW');
define('AUTH_SALT',        'MLYKLbBZIaK8Hm/rE8Bz66uS0BV8ObVWQqwg3qKGjVcJkK9FVTdKWajmfSHV');
define('SECURE_AUTH_SALT', '3xqj7wPkpQBNt7jkJyLgh19WysZW85tplumwlHx1NgPGQJUDL6DtU0Quls5Y');
define('LOGGED_IN_SALT',   '1CLvcbf75+RqDtDXBif5C05iGUDPDuTAujEzcdad0+g6yuVvaxw/NR4Aumy7');
define('NONCE_SALT',       'aWLDu7Pof+9JiuoaDLOqq92RczmOLhgKE5iBlQYH5KopEZwRUckGgV8HakfW');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'mod556_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/* Fixes "Add media button not working", see http://www.carnfieldwebdesign.co.uk/blog/wordpress-fix-add-media-button-not-working/ */
define('CONCATENATE_SCRIPTS', false );

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
