const getMessage = (req,res) => {
    const message = req.params.message;
    res.send(`“Su mensaje es ${message}”`)
}

export { getMessage }