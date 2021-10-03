const axios = require('axios');
const qs = require('qs');

const { URL_FLOW } = process.env;

const generatePayments = async (req, res) => {
  const data = qs.stringify(req.body);

  const payments = axios
    .post(`${URL_FLOW}/create`, data, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
    .then((response) => {
      const url = `${response.data.url}?token=${response.data.token}`;
      return res.json({ url });
    })
    .catch((error) => {
      return res.status(error.response.status).send(error.response.data);
    });
  return payments;
};

module.exports = {
  generatePayments,
};
