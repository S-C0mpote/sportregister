import { useBody, useCookies, useQuery } from 'h3'
import tools from "~/composables/tools";
let used = [];
export default async (req, res) => {
    const body = await useBody(req)
    let session = body.session;
    const data = await tools.updateInfos(session)
    res.end(JSON.stringify(data))
}