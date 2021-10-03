const express = require('express');

const router = express.Router();

const paymentsController = require('./controllers/payments');

router.post('/payments', paymentsController.generatePayments);
router.all('*', (req, res) => res.status(404).json({ message: 'Route not found'}));

module.exports = router;
