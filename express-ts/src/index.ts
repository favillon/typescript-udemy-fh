import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(200).json({
    status : true,
    message : 'Exito express con TS'
  })
  /*res.send({
    status : true,
    message : 'Exitos esto aca'
  })*/
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})