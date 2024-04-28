const  User = require('../../db/models/userSchema.js');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken');
const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const body = req.body;
    const user = await User.findOne({ email: body.email });
    if (user) {
      return res
        .status(400)
        .json({ message: 'User with this email already exist' });
    }
    if (body.password != body.confirmPassword) {
      return res.status(400).json({ message: 'Password doesnot match' });
    }
    const hashedPassword = await bcrypt.hash(body.password, 2);
    body.password = hashedPassword;
    console.log(body,'this is bodyu')
    const addUser = await User.create(body);
    return res.status(200).json(addUser);
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.post('/login', async (req, res) => {
  console.log('heleooooo')
  try {
    const body = req.body;
    const user = await User.findOne({ email: body.email });
    if (!user) {
      return res.status(403).json({ message: 'email or password missmatch' });
    }
    const isMatching = await bcrypt.compare(body.password, user.password);
    if (!isMatching) {
      return res.status(403).json({ message: 'email or password missmatch' });
    }

    const token = jwt.sign(
      { id: user._id, role: 'USER' },
      'hsidodbdksksbxjdxdkxkdckckxksksl',
      { expiresIn: '7d' }
    );
    return res.status(200).json({ message: 'logged in', token: token });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

module.exports= router;
