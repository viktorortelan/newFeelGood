import database from "../repository/conn.js";


export async function emailExistente(email, id) {
    const query = 'SELECT COUNT(*) as count FROM tb_cliente WHERE ds_email = ? AND id_cliente != ?';
    const [rows] = await database.query(query, [email, id]);
    return rows[0].count > 0;
}


export async function telefoneExistente(telefone, id) {
    const query = 'SELECT COUNT(*) as count FROM tb_cliente WHERE ds_telefone = ? AND id_cliente != ?';
    const [rows] = await database.query(query, [telefone, id]);
    return rows[0].count > 0;
}
