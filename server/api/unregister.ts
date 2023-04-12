import { useBody, useCookies, useQuery } from 'h3'
import tools from "~/composables/tools";
import login from "~/server/api/login";
let used = [];
export default async (req, res) => {
    const body = await useBody(req)

    let id = body.sportID;
    let session = body.session;
    const status = await tools.unsubToSport(id, session)
    res.end(JSON.stringify({code: status}))
}