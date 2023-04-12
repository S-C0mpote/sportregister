import { useBody, useCookies, useQuery } from 'h3'
import tools from "~/composables/tools";
let used = [];
export default async (req, res) => {
    const body = await useBody(req)

    let username = body.username;
    let password = body.password;
    const loginInfos = await tools.login(username, password)
    res.end(JSON.stringify(loginInfos))
}