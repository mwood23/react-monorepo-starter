import express from 'express'
const PORT = process.env.PORT || 8080

const app = express()

app.get('/update-user', function(req, res) {
  console.log('here', req.body)
  return res.send('pong')
})

app.listen(PORT, () =>
  console.log(`🚀  Server ready at http://localhost:${PORT}`),
)
