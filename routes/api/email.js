const express = require('express');
const router = express.Router();

const { check, body, validationResult } = require('express-validator');

router.post(
  '/',
  [
    check('key', 'Key is required').not().isEmpty(),
    check('message', 'Message Object is required with subject and title')
      .exists()
      .isObject()
      .custom((value) => {
        if (value.title && value.subject) return true;
      }),
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

    res.json({key, message, additionalInfo, email });

    // res.send('Hello');
  }
);

module.exports = router;
