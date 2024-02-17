const mercadopago = require("mercadopago");

//!ocultar esto en .env
const createPayment = async (req, res) => {
	const { items } = req.body
	const client = new mercadopago.MercadoPagoConfig({ accessToken: 'TEST-7215814918170552-021621-23ba72db2ba47b1bd037b6346f15a201-1687307960', options: { timeout: 5000 } });

	const preference = new mercadopago.Preference(client);

	const preferenceCreated = await preference.create({ body: {
		items: [
			...items
		],
		back_urls: {
			"success": "http:/localhost:5173/feedback",
			"failure": "http:/localhost:5173/feedback",
			"pending": "http:/localhost:5173/feedback"
		},
		auto_return: "approved",
	} })
	console.log(preferenceCreated);
	return res.status(200).json(preferenceCreated)
};

const feedback =  function (req, res) {
	res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
};

module.exports = {
	createPayment,
	feedback
}




