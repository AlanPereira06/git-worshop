const getError = (req,res) => {
    const message = req.params.message;
    res.status(400).send('“Mensaje de error”')
}

export { getError }