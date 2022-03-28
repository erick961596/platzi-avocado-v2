import { IncomingMessage, ServerResponse } from "http";

import DB from "@database";
const allAvo = async(request:IncomingMessage, response:ServerResponse) => {

    const db = new DB();
    const AllEntries = await db.getAll();
    const cantidad = AllEntries.length;

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');

    response.end(JSON.stringify( {length:cantidad, data:AllEntries }));
}

export default allAvo;