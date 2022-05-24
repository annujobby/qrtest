function Qrcode(title, subject, url) {
	return `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Cakepoint</title>
	</head>
	<body>
		<header>
			<nav>
				<h1>Cakepoint</h1>
			</nav>
		</header>
		<div>
			<h3>title:${title}</h3>
			<p>Subject:${subject}</p>
			<p>Url:${url}</p>
			
		</div>
	</body>
</html>


  `;
}

module.exports = Qrcode;
