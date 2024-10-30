import database from "./conn.js";

const addPictureCliente = async (value, reference) => {
    const cmd = `UPDATE tb_cliente SET nm_foto = ? WHERE id_cliente = ?`;
    const x = await database.query(cmd, [value, reference]);
    return x[0];
}

export default addPictureCliente;