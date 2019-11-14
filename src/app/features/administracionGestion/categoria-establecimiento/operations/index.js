import db from '../../../../../../db/index'


const getAll = async () => {
    let categoria_establecimiento = []
    await db.query('SELECT id, nombre FROM categoiria_establecimiento').then(result => categoria_establecimiento = result)
    return categoria_establecimiento
}

const findById = async (id) => {
    let categoria_establecimiento = []
    await db.query(`SELECT id, nombre FROM categoiria_establecimiento WHERE id = ${id}`).then(result => categoria_establecimiento = result)
    return categoria_establecimiento[0] || null
}

const add = async (categoria_establecimiento) => {
    const q = `
        insert into 
        categoiria_establecimiento(nombre, sector_id) 
        values('${categoria_establecimiento.nombre}','${categoria_establecimiento.sector_id}')
    `
    let result
    await db.query(q).then(r => result = r)
    return result.affectedRows > 0
}

const edit = async (id, categoria_establecimiento) =>{
    const q = `
        update categoiria_establecimiento
        set nombre = '${categoria_establecimiento.nombre}', sector_id = '${categoria_establecimiento.sector_id}'
        WHERE id = ${id}
    `    
    let result
    await db.query(q).then(r => result = r)
    return result.affectedRows > 0    
}

const editPart = async (id, field, value) => {
    const q = `
        update categoiria_establecimiento
        set ${field} = '${value}'
        WHERE id = ${id}
    ` 
    let result
    await db.query(q).then(r => result = r)
    return result.affectedRows > 0        
}

const remove = async (id) => {
    const q = `
        delete from categoiria_establecimiento 
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