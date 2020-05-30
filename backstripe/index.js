const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const stripe = require('stripe')('sk_test_j8tbssLHHm7f8e9qwM358dof000kR77ecC')

const app = express()

app.use(express.json({extended: true}))
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())

app.use(cors())

//подключили роут
app.use('/auth', require('./routes/auth.routes'))

app.post('/secret', async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    payment_method_types: ['card'],
    amount: 100,
    currency: 'usd',
  })
  res.send(paymentIntent.client_secret)
})


// app.get("/connect/oauth", async (req, res) => {
//   const { code } = req.query

//   const response = await stripe.oauth.token({
//     grant_type: 'authorization_code',
//     code
//   })
//   const stripeUserId = response.stripe_user_id.toString()

//   //нужно сохранить в базу данных accountId
//   //redirect на страницу 
//   // как пример попробуй так
//   // const account = new UserData({
//   //   stripeUserId : stripeUserId
//   // })

//   // await account.save()
//   // res.redirect('/')
// })


// app.post('/getstripekey', async (req, res) => {
//   const stripeUserId = await UserData.find
//   надо понять как найти, у каждого элемента в базе добавляется так же _id
// })


async function start() {
  try {
    await mongoose.connect("mongodb+srv://egor:1234qwer@cluster0-ozrrd.mongodb.net/test?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology:true,
      useCreateIndex:true
    })
    app.listen(5000, () => console.log('Server was started...'))
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}
start()
