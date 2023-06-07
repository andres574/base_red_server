const {response} = require('express');

const usuariosGet = (req, res= response) => {   

    const query = req.query;
    res.json({
        ok: true,
        mdg: 'get Api-- conbtrolador'

    });
}

const usuariosPost = (req, res) => {

    const body = req.body;

    res.json({
        ok: true,
        mdg: 'post Api - conbtrolador',
        body

    });
}
const usuariosPut =(req, res) => {

    const id = req.params.id
    res.json({
        ok: true,
        mdg: 'put Apis - conbtrolador',
        id:id

    });
}
const usuariosDelete = (req, res) => {
    res.json({
        ok: true,
        mdg: 'delete Api - conbtrolador'

    });
}
const usuariosPath = (req, res) => {
    res.json({
        ok: true,
        mdg: 'patch Api - conbtrolador'

    });
}




module.exports={
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosPath,
    usuariosPut
}