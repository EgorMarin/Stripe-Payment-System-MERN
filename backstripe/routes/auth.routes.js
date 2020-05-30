const {Router} = require('express')
const User = require('../Models/User')
const bcrypt = require('bcryptjs')
const router = Router()

//  /auth/register
router.post('/register', async (req, res) => {
  try {
    
    const {email, password} = req.body
    //изначально нужно проверить есть ли такой человек в базе
    //проверяем по email прилетевшего из req.body по модели
    const candidate = await User.findOne({ email: email })
    
    if(candidate) {
      return res.status(400).json({message: 'Такой пользователь уже существует'})
    }

    //Хэшируем пароль для безопасности
    const hashedPassword = await bcrypt.hash(password, 12)

    //создаем в базе данных пользователя
    const user = new User({email: email, password: hashedPassword})
    //coхраняем создание
    await user.save()

    res.status(201).json({message: 'Пользователь создан'})
  } catch(e) {
    res.status(500).json({message: "Что-то пошло не так, попробуйте снова"})
  }
})

// /auth/login
router.post('/login', async (req, res) => {
  try {
    const {email, password} = req.body
    const candidate = User.findOne({email})

    if (!candidate) {
      return res.status(400).json({message: 'Неверный email'})
    }
    
    //теперь проверяем по паролю, сначала нужно разхэшировать
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(400).json({message: 'Неверный пароль'})
    } 

  } catch(e) {
    res.status(500).json({message: "Что-то пошло не так, попробуйте снова"})
  }
})

module.exports = router