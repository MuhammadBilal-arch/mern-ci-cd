import userService from '../services/userService.js';

// Controller to create a new user
export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Delegate business logic to the service layer
    const newUser = await userService.createUser(name, email, password);
    res.status(201).json({
      message: 'User created successfully',
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get a user by ID
export const getUserById = async (req, res) => {
  const { userId } = req.params;

  try {
    // Call the service layer to get the user
    const user = await userService.getUserById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get all users
export const getAllUsers = async (req, res) => {
  try {
    // Call the service layer to get all users
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
