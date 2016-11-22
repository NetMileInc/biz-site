<?php
/*
Plugin Name:brBrbr
Plugin URI:http://camcam.info/wordpress/101/
Description:Line feed is converted to &lt;br /&gt;.
Version:1.5
Author:CamCam
Author URI:http://camcam.info/
*/

remove_filter('the_content','wpautop');
add_filter('the_content','brBrbr');

remove_filter('comment_text','get_comment_text');
add_filter('comment_text','comment_text_br');


function brBrbr($brbr) {
	$brbr = str_replace(array("\r\n", "\r"), "\n", $brbr); // cross-platform newlines 
	$brbr = str_replace("\n", "<br />\n", $brbr); // cross-platform newlines 
	$brbr = preg_replace('!(</?(?:table|img|thead|tfoot|caption|tbody|tr|td|th|div|dl|dd|dt|ul|ol|li|pre|select|form|textarea|input|blockquote|address|p|math|p|script|h[1-6])[^>]*>)\s*<br />!', "$1", $brbr);
	$brbr = preg_replace('|<blockquote([^>]*)>|i', "</p>\n<blockquote$1><p>", $brbr);
	$brbr = str_replace('</blockquote>', "</p></blockquote>\n<p>", $brbr);
	$brbr = preg_replace('/(<script.*?>)(.*?)<\/script>/ise', "clr_br('$0')", $brbr);
	$brbr = preg_replace('/(<form.*?>)(.*?)<\/form>/ise', "clr_br('$0')", $brbr);
	$brbr="<p>\n".$brbr."</p>\n";
	return $brbr; 
}

function comment_text_br() {
	global $comment;
	$comment_br = apply_filters('get_comment_text', $comment->comment_content);
	$comment_br = make_clickable($comment_br);
	print brBrbr($comment_br); 
}

function clr_br($str){
	$str  = str_replace("<br />","",$str);
	$str  = str_replace('\"','"',$str);
	return $str;
}

?>