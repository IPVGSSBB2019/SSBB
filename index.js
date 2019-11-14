import server from './server'
import operations from './src/app/features/administracionGestion/categoria-establecimiento/operations/index'
import operationsComuna from './src/app/features/administracionGestion/comunas/operationsComuna/index'

server((app) => {

    app.get('/catestablecimiento', async (req, res, next) => {
        res.status(200).json({
            OK:true, 
            categoria_establecimiento: await operations.getAll(),
        })
    })

    app.get('/catestablecimiento/:id', async (req, res, next) => {
        const categoria_establecimiento = await operations.findById(req.params.id)
        res.status(200).json({
            OK: true,
            categoria_establecimiento: categoria_establecimiento
        })
    })

    app.post('/catestablecimiento/', async (req, res, next) => {
        const categoria_establecimiento = req.body
        const result = await operations.add(categoria_establecimiento)
        res.status(200).json({
            OK: true,
            result: result
        })
    })

    app.put('/catestablecimiento/:id',  async (req, res, next) => {
        const categoria_establecimiento = req.body
        const result = await operations.edit(req.params.id, categoria_establecimiento)
        res.status(200).json({
            OK: true,
            result: result
        })        
    })

    app.patch('/catestablecimiento/:id',  async (req, res, next) => {
        const value = req.body.value
        const field = req.body.field
        const id = req.params.id
        const result = await operations.editPart(req.params.id, field, value)
        res.status(200).json({
            OK: true,
            result: result
        })             
    })

    app.delete('/catestablecimiento/:id', async (req, res, next) => {
        const result = await operations.remove(req.params.id)
        res.status(200).json({
            OK: true,
            result: result
        })
    })

    app.get('/comuna', async (req, res, next) => {
        res.status(200).json({
            OK:true, 
            comuna: await operationsComuna.getAll(),
        })
    })

    app.get('/comuna/:id', async (req, res, next) => {
        const comuna = await operationsComuna.findById(req.params.id)
        res.status(200).json({
            OK: true,
            comuna: comuna
        })
    })

    app.post('/comuna/', async (req, res, next) => {
        const Comuna = req.body
        const result = await operationsComuna.add(Comuna)
        res.status(200).json({
            OK: true,
            result: result
        })
    })

    app.put('/comuna/:id',  async (req, res, next) => {
        const comuna = req.body
        const result = await operationsComuna.edit(req.params.id, comuna)
        res.status(200).json({
            OK: true,
            result: result
        })        
    })

    app.patch('/comuna/:id',  async (req, res, next) => {
        const value = req.body.value
        const field = req.body.field
        const id = req.params.id
        const result = await operationsComuna.editPart(req.params.id, field, value)
        res.status(200).json({
            OK: true,
            result: result
        })             
    })

    app.delete('/comuna/:id', async (req, res, next) => {
        const result = await operationsComuna.remove(req.params.id)
        res.status(200).json({
            OK: true,
            result: result
        })
    })

})