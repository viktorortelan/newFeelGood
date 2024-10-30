import database from "./conn.js";

const findImgCliente = async (reference) => {

    const cmd = `SELECT nm_foto from tb_cliente WHERE id_cliente = ?`;
    const x = await database.query(cmd, [reference]);
    return x[0][0];
}

export default findImgCliente;