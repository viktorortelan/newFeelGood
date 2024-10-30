import database from "./conn.js";

const addPictureCorretor = async (value, reference) => {
    const cmd = `UPDATE tb_corretores SET nm_foto = ? WHERE id_corretor = ?`;
    const x = await database.query(cmd, [value, reference]);
    return x[0];
}

export default addPictureCorretor;