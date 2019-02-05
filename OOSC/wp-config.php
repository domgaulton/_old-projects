<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'OOSC');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

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
define('AUTH_KEY',         '/{^I,j#<?@,:Bq}WzZ|rJzKiC+U7^dgE57QOF|pzqH[-KI QF-Dh}G9k]8Yl;DwT');
define('SECURE_AUTH_KEY',  '&H~E|8&|VpOnmT@1bNMb|W?0z<4;[0$D+jz6N7g2 )gIwRkb]cN?dfCV+u%Q(CIO');
define('LOGGED_IN_KEY',    '5-gj=o&XZn)PJc{/g{H@q0{vJW$i:G%lF3+(0BY,W,CD5_<i~;}&j:+oMJ#Rdt-s');
define('NONCE_KEY',        'oIT+;3BiEZ>o6cJxm<+qG ]`N.yVDrRET+r|fgP{-17#q;-X7*4vPaCT.%C}e_Q|');
define('AUTH_SALT',        'Km+e}V*Hf$Yrsl/la&?r$3x;JR+&?kjJ1{r6@|_=*+^N/rFkwt-*>,l`2u7,b<Lk');
define('SECURE_AUTH_SALT', 'wFRB2hzOB%K4d:D}rC0.mZt}-RF1>N5]>o26KtIcr-(C;~6|>4?H[wm0o:iDeP8?');
define('LOGGED_IN_SALT',   'lbrLl-Hd,U3wgxH+=}Lr-ai%5U3r<kI)##s$zZL{10is?#tE_[yqcOk1h@+/r%Uq');
define('NONCE_SALT',       '{YkYf<6^(]RJea)gS.K&`:QQ>)q-nWecQt]R/2Y+,dQ!T^pQn$IH=_GMI!>A?v?E');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
