const express = require('express');
const router = express.Router();
const Cakepoint = require('../../Templates/Cakepoint');
const Qrcode = require('../../Templates/Qrcode');

const { check, body, validationResult } = require('express-validator');

router.post(
	'/',
	[
		check('key', 'Key is required').not().isEmpty(),
		check('message', 'Message Object is required with subject and title')
			.exists()
			.isObject(),
		check('additionalInfo', 'Text Object is required').exists().isObject(),
		check('email', 'Email is Invalid').not().isEmpty().isArray(),
		check('email.*', 'Email is Invalid').isEmail(),
	],
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { key, message, additionalInfo, email } = req.body;

		const { title, subject, url } = message;
		let html = '';
		switch (key) {
			case 'cakePoint':
				console.log('cakePoint', ...email);
				html = Cakepoint(title, subject, cakename, shippingAddress);
				console.log(html);
				break;
			case 'Qrcode':
				console.log('Qrcode');
				html = Qrcode(title, subject, url);
				console.log(html);
				break;
			default:
				res.send('No key found');
		}

		res.json({ key, message, additionalInfo, email });

		// res.send('Hello');
	}
);

module.exports = router;
