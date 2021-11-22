const express = require('express');
const router = express.Router();

const { users } = require('../models');

router.get('/api/users', async (req, res) => {
	try {
	} catch (error) {
		console.log(`error.message =>`, error.message);
	}
});

module.exports = router;
