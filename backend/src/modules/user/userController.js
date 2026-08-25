const User = require("./userModel");
const Role = require("../role/roleModel");
const catchAsync = require("../../utils/catchAsync");
const AppError = require("../../utils/appError");


const createUser = catchAsync(async (req, res, next) => {
  const { firstName, lastName, email, password, phone, company, role } = req.body;

  const roleExists = await Role.findById(role);
  if (!roleExists) {
    return next(new AppError("Role not found", 404));
  }

  const user = await User.create({ firstName, lastName, email, password, phone, company, role });
  user.password = undefined;

  res.status(201).json({ success: true, data: { user } });
});


const getUsers = catchAsync(async (req, res, next) => {
  const users = await User.find().populate("role", "name").populate("company", "companyName");
  res.status(200).json({ success: true, results: users.length, data: { users } });
});


const getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id).populate("role", "name").populate("company", "companyName");
  if (!user) return next(new AppError("User not found", 404));
  res.status(200).json({ success: true, data: { user } });
});


const updateUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!user) return next(new AppError("User not found", 404));
  res.status(200).json({ success: true, data: { user } });
});


const activateUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, { status: "active" }, { new: true, runValidators: true });
  if (!user) return next(new AppError("User not found", 404));
  res.status(200).json({ success: true, data: { user } });
});


const deactivateUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, { status: "inactive" }, { new: true, runValidators: true });
  if (!user) return next(new AppError("User not found", 404));
  res.status(200).json({ success: true, data: { user } });
});


const resetUserPassword = catchAsync(async (req, res, next) => {
  const { password } = req.body;
  const user = await User.findById(req.params.id);
  if (!user) return next(new AppError("User not found", 404));

  user.password = password;
  await user.save();

  res.status(200).json({ success: true, message: "Password reset successfully" });
});


const assignRole = catchAsync(async (req, res, next) => {
  const { role } = req.body;

  const roleExists = await Role.findById(role);
  if (!roleExists) return next(new AppError("Role not found", 404));

  const user = await User.findByIdAndUpdate(req.params.id, { role }, { new: true, runValidators: true }).populate("role", "name");
  if (!user) return next(new AppError("User not found", 404));

  res.status(200).json({ success: true, data: { user } });
});

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  activateUser,
  deactivateUser,
  resetUserPassword,
  assignRole,
};