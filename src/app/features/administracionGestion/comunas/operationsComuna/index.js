import db from '../../../../../../db/index'


const getAll = async () => {
    let CategoriaMantenedor = []
    await db.query('SELECT id, nombre FROM comuna').then(result => CategoriaMantenedor = result)
    return CategoriaMantenedor
}

const findById = async (id) => {
    let CategoriaMantenedor = []
    await db.query(`SELECT id, nombre FROM comuna WHERE id = ${id}`).then(result => CategoriaMantenedor = result)
    return CategoriaMantenedor[0] || null
}

const add = async (Comuna) => {
    const q = `
        insert comuna
        (nombre) 
        values('${Comuna.nombre}')
    `
    let result
    await db.query(q).then(r => result = r)
    return result.affectedRows > 0
}

const edit = async (id, Comuna) =>{
    const q = `
        update comuna 
        set nombre = '${Comuna.nombre}' 
        WHERE id = ${id}
    `    
    let result
    await db.query(q).then(r => result = r)
    return result.affectedRows > 0    
}

const editPart = async (id, field, value) => {
    const q = `
        update comuna
        set ${field} = '${value}'
        WHERE id = ${id}
    ` 
    let result
    await db.query(q).then(r => result = r)
    return result.affectedRows > 0        
}

const remove = async (id) => {
    const q = `
        delete from comuna
        WHERE id = ${id}
    ` 
    let result
    await db.query(q).then(r => result = r)
    return result.affectedRows > 0    
}

export default {
    getAll,
    findById,
    add,
    edit,
    editPart,    
    remove,
}