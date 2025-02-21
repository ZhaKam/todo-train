const { Router } = require("express");
const router = Router();
const User = require('../models/User');

router.post(
  "/registration",
  async (req, res) => { 
      try {
          const { email, password } = req.body;

          const isUsed = await User.findOne({ email });

          if (isUsed) {
              return res.status(300).json({ message: 'Данный email уже занят, попробуйте другой.' });
          }

          const user = new User({
              email, password
          });

          await user.save();

          res.status(201).json({ message: 'Пользователь создан' });

      } catch (error) {
          console.log(error);
          res.status(500).json({ message: 'Ошибка сервера' }); // добавлено: обработка ошибок
      }
  }
);

module.exports = router;