const User = require('../models/User');
const { catchAll } = require('../utils');

exports.getAll = catchAll(async (req, res) => {
	const users = await User.find({ active: 'active' });
	res.status(200).json({ status: 'success', data: { users } });
});

exports.getById = catchAll(async (req, res, next) => {
	const user = await User.findById(req.params.id);

	if (!user) return next(new Error('No user found'));

	res.status(200).json({ status: 'success', data: { user } });
});

exports.create = catchAll(async (req, res, next) => {
	const user = await User.create(req.body);

	res.status(201).json({ status: 'success', data: { user } });
});

exports.update = catchAll(async (req, res, next) => {
	console.log(req.params.id)
	const id = req.params.id
	const user = await User.findByIdAndUpdate( id, req.body, { new: true });

	if (!user) return next(new Error('No user found'));

	res.status(200).json({ status: 'success', data: { user } });
});

exports.delete = catchAll(async (req, res, next) => {
	const user = await User.findByIdAndDelete(req.params.id);

	if (!user) return next(new Error('No user found'));

	res.status(204).json({ status: 'success', data: null });
});
