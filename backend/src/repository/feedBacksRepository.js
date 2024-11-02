import database from "./conn.js";

export async function addFeed(id, comentario) {
    let comando = `
        INSERT INTO tb_feed_backs (id_cliente, ds_comentario)
            VALUES(?, ?);
    `;
    let registro = await database.query(comando, [id, comentario]);
    let fim = registro[0];
    return fim.insertId;
}


export async function aparecerFeed() {
    let comando = `
    SELECT 
    c.nm_cliente AS nome_cliente,
    f.ds_comentario AS comentario,
    c.nm_foto AS nome_foto FROM 
    tb_feed_backs f INNER JOIN 
    tb_cliente c ON f.id_cliente = c.id_cliente
    LIMIT 0, 500;
    `;   

    let registro = await database.query(comando);
    let fim = registro[0];
    return fim;
}

export async function apareceIndividual(id) {
    let comando = `
        SELECT 
        c.nm_cliente AS nome_cliente,
        f.ds_comentario AS comentario,
        c.nm_foto AS nome_foto FROM 
        tb_feed_backs f INNER JOIN tb_cliente c ON f.id_cliente = c.id_cliente
        WHERE c.id_cliente = ?;
    `;

    let registro = await database.query(comando, [id]);
    let fim = registro[0];
    return fim;
}