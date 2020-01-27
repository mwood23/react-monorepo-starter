import express from 'express'
import bodyParser from 'body-parser'

import { userProfileValidationSchema } from '@monorepo-starter/fancy-app-shared'

const PORT = process.env.PORT || 8080

const app = express()
app.use(bodyParser())

app.post('/create-user', async (req, res) => {
  const data = await userProfileValidationSchema
    .validate(req.body, { abortEarly: false })
    .catch(({ errors }) => res.status(400).send(errors))

  return res.status(201).send({
    msg: 'Success!',
    data,
  })
})

app.listen(PORT, () =>
  console.log(`🚀  Server ready at http://localhost:${PORT}`),
)
