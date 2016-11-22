<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>

<head profile="http://gmpg.org/xfn/11">
<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />
<meta name="keywords" content="広報,ブログ,blog,ネットマイル,netmile,ポイント" />
<meta name="description" content="日本最大級の共通ポイント「ネットマイル」の広報ブログ。広報担当ムライが広報ブログを利用して、サイトでは伝えきれないとっておき情報を紹介します！" />


<title><?php wp_title('&laquo;', true, 'right'); ?> <?php bloginfo('name'); ?></title>

<link rel="stylesheet" href="css/reset.css" type="text/css" media="all" />
<link rel="stylesheet" href="css/nm_blog.css" type="text/css" media="all" />

<link rel="alternate" type="application/rss+xml" title="<?php printf(__('%s RSS Feed', 'kubrick'), get_bloginfo('name')); ?>" href="<?php bloginfo('rss2_url'); ?>" />
<link rel="alternate" type="application/atom+xml" title="<?php printf(__('%s Atom Feed', 'kubrick'), get_bloginfo('name')); ?>" href="<?php bloginfo('atom_url'); ?>" /> 
<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />

<style type="text/css" media="screen">

<?php
// Checks to see whether it needs a sidebar or not
if (!empty($withcomments) && !is_single() ) {
?>
	#page { background: url("<?php bloginfo('stylesheet_directory'); ?>/images/kubrickbg-<?php bloginfo('text_direction'); ?>.jpg") repeat-y top; border: none; }
<?php } else { // No sidebar ?>
	#page { background: url("<?php bloginfo('stylesheet_directory'); ?>/images/kubrickbgwide.jpg") repeat-y top; border: none; }
<?php } ?>

</style>

<?php if ( is_singular() ) wp_enqueue_script( 'comment-reply' ); ?> 

<?php wp_head(); ?>
</head>
<body>
<!-- twitter follow badge by go2web20 -->
<script src='http://files.go2web20.net/twitterbadge/1.0/badge.js' type='text/javascript'></script><script type='text/javascript' charset='utf-8'><!--
tfb.account = 'netmile';
tfb.label = 'follow-me';
tfb.color = '#6ccff7';
tfb.side = 'r';
tfb.top = 136;
tfb.showbadge();
--></script>
<!-- end of twitter follow badge -->
<div id="page">

<!-- /insert HTML yasutake -->
<p id="topTitle">ネットマイルBlog</p>

<!-- PV Counter START -->
<img src="http://www.netmile.co.jp/ctrl/user/UImageDc.do?p=dc&pv=biz_000058" alt="" />
<!-- PV Counter END -->

<!-- top START -->
<div id="top">
	<a href="/" name="top"><img src="http://biz.netmile.co.jp/images/common/header/companyname.gif" alt="株式会社 ネットマイル" width="219" height="35" border="0" class="companyname"/></a>
	<div class="headerR">
		<a href="http://www.netmile.co.jp/" target="_blank"><img src="http://biz.netmile.co.jp/images/common/header/logo.gif" alt="NetMile" width="72" height="19" border="0" /></a>

		<ul>
			<li><a href="/sitemap.html">サイトマップ</a></li>
			<li><a href="http://www.netmile.co.jp/" target="_blank">サービスサイト</a></li>
		</ul>
	</div>
	<div class="floatReset"></div>
</div>
<!-- top END -->
<!-- insert HTML yasutake/ -->


<div id="header">
	<div id="headerimg">
		<h1><a href="<?php echo get_option('home'); ?>/"><?php bloginfo('name'); ?></a></h1>
		<div class="description"><?php bloginfo('description'); ?></div>
	</div>
</div>
<!-- /insert HTML yasutake -->
<p class="lead">共通ポイントプログラムを運営する株式会社ネットマイルの広報担当ムライが、サイトでは伝えきれないとっておき情報を紹介します！</p>

<div class="shadow"></div>
<!-- insert HTML yasutake/ -->

<hr />

<!-- /insert HTML yasutake -->
<!-- contentsInner START -->
<div id="contentsInner">
<!-- insert HTML yasutake/ -->