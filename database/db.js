const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		mongoose.connect(
			'mongodb+srv://EcommerceDB:connect123456@ecommerce-mern-stack.ciollcb.mongodb.net/?retryWrites=true&w=majority',
			{ useNewUrlParser: true, useUnifiedTopology: true }
		);
		console.log('Database connection successful!');
	} catch (error) {
		console.log(error);
	}
};

module.exports = connectDB;
