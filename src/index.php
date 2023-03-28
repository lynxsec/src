<?php
if (!isset($_COOKIE['authenticated']) || $_COOKIE['authenticated'] !== '1') {
    header('Location: login.php');
    exit;
}
?>
<!DOCTYPE html>
<!--
 Copyright (c) 2019 Nadav Tasher
 https://github.com/NadavTasher/BaseTemplate/
-->
<html row lang="en">
<head>
	<meta charset="UTF-8"/>
	<meta name="description" content="Slytherin Login">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, minimal-ui"/>
	<meta name="mobile-web-app-capable" content="yes">
	<meta name="theme-color" content="#B0BBC4"/>
	<meta name="apple-mobile-web-app-capable" content="yes"/>
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
	<meta name="apple-mobile-web-app-title" content="Slytherin Login"/>
	<link rel="apple-touch-icon" href="images/icons/app/icon_apple.png"/>
	<link rel="icon" href="images/icons/app/icon.png"/>
	<link rel="manifest" href="resources/manifest.json"/>
	<link rel="stylesheet" href="stylesheets/app.css"/>
	<link rel="stylesheet" href="stylesheets/theme.css"/>
	<link rel="stylesheet" href="stylesheets/template.css"/>
	<link rel="oldscript" href="scripts/frontend/old.js"/>
	<script type="text/javascript" src="scripts/frontend/app.js"></script>
	<script type="text/javascript" src="scripts/frontend/base/api.js"></script>
	<title>Slytherin Login</title>
	<noscript></noscript>
</head>
<body onload="prepare(load)" column>
</body>
</html>
