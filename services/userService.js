import User from '../models/user.js'; // Import the User model

const createUser = async (name, email, password) => {
  // Business logic goes here: Hash password, validate data, etc.
  const newUser = new User({ name, email, password });

  await newUser.save();
  return newUser;
};

const getUserById = async (userId) => {
  return await User.findById(userId);
};

const getAllUsers = async () => {
  return await User.find();
};

const userService = { createUser, getUserById, getAllUsers };
export default userService;