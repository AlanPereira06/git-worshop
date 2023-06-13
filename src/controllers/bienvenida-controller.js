const getBienvenida = (req,res) => {
    const message = req.params.message;
    res.send(`“Bienvenido a mi aplicación”`)
}

export { getBienvenida }