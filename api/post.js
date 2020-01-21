app.post('/', upload.single('img'), (req, res, err) => {
    if (err) throw err
    res.status(201).send()
  })