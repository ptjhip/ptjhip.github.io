<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<title>系统发生错误</title>
<style type="text/css">
*{ padding: 0; margin: 0; }
html{ overflow-y: scroll; }
body{ background: #fff; font-family: '微软雅黑'; color: #333; font-size: 16px; }
img{ border: 0; }
.error{ padding: 24px 48px; }
.face{ font-size: 100px; font-weight: normal; line-height: 120px; margin-bottom: 12px; }
h1{ font-size: 32px; line-height: 48px; }
.error .content{ padding-top: 10px}
.error .info{ margin-bottom: 12px; }
.error .info .title{ margin-bottom: 3px; }
.error .info .title h3{ color: #000; font-weight: 700; font-size: 16px; }
.error .info .text{ line-height: 24px; }
.copyright{ padding: 12px 48px; color: #999; }
.copyright a{ color: #000; text-decoration: none; }
</style>
</head>
<body>
<div class="error">
<p class="face">:(</p>
<h1>非法操作:home</h1>
<div class="content">
	<div class="info">
		<div class="title">
			<h3>错误位置</h3>
		</div>
		<div class="text">
			<p>FILE: C:\wwwroot\patsnap\ThinkPHP\Library\Think\Controller.class.php &#12288;LINE: 170</p>
		</div>
	</div>
	<div class="info">
		<div class="title">
			<h3>TRACE</h3>
		</div>
		<div class="text">
			<p>#0 C:\wwwroot\patsnap\ThinkPHP\Library\Think\Controller.class.php(170): E('????????????:ho...')<br />
#1 [internal function]: Think\Controller->__call('home', '')<br />
#2 C:\wwwroot\patsnap\ThinkPHP\Library\Think\App.class.php(114): ReflectionMethod->invokeArgs(Object(Home\Controller\PublicController), Array)<br />
#3 C:\wwwroot\patsnap\ThinkPHP\Library\Think\App.class.php(204): Think\App::exec()<br />
#4 C:\wwwroot\patsnap\ThinkPHP\Library\Think\Think.class.php(120): Think\App::run()<br />
#5 C:\wwwroot\patsnap\ThinkPHP\ThinkPHP.php(97): Think\Think::start()<br />
#6 C:\wwwroot\patsnap\index.php(27): require('C:\wwwroot\pats...')<br />
#7 {main}</p>
		</div>
	</div>
</div>
</div>
<div class="copyright">
<p><a title="官方网站" href="http://www.thinkphp.cn">ThinkPHP</a><sup>3.2.3</sup> { Fast & Simple OOP PHP Framework } -- [ WE CAN DO IT JUST THINK ]</p>
</div>
</body>
</html>
