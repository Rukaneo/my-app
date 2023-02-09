
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
    {
		// id: mongoose.Schema.Types.ObjectId,
		id: String,
		name: String,
		email: String,
		phone:Number,
		status: {
			type: String,
            enum: ['active', 'inactive'],
            default: 'active',
		},
		},
			{timestamps: true}
			);
module.exports = mongoose.model('User', UserSchema);

