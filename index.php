<!-- 設定網頁編碼為UTF-8 -->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel=stylesheet type="text/css" href="css/index.css">
<title>LOGIN</title>
<head>
<script src="js/jquery-1.11.3.min.js"></script>
<script src="js/index.js"></script>
</head>


<body>
	<div id="home" data-role="page">
      <h1 class="btn1" onselectstart="return false">LOGIN</h1>
	  <div role="main" class="ui-content" onselectstart="return false">
	  <h2 class="title1">音樂拍拍</h2>
		<h2 class="title2">Circle PAPA</h2>
		
		<div class="content1">
		<form name="form" method="post" action="./member/connect.php">
			<h3 >帳號</h3>
			<input type="text" name="id">
			
			<h3>密碼</h3>
			<input type="password" name="pw">
			
			<button type="submit" id="loginBtn" >登入</button>

		</form>
		
		<a href="./member/register.php"><h4 class="btn-back">註冊</h4> </a>
		</div>
		
		<div id="bg"></div>
	  </div>  
</div>
</body>
