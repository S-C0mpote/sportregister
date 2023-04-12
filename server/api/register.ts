import {use, useBody, useCookies, useQuery} from 'h3'
import tools from "~/composables/tools";
let used = [];
export default async (req, res) => {
    const body = await useBody(req)

    let sportID = body.sportID;
    let session = body.session;
    let stopCondition = body.stopCondition
    let hash = session+","+sportID
    if (stopCondition){
        used.splice(used.indexOf(hash), 1);
        res.end(JSON.stringify({stopped: 1}));
        return;
    }

    let subStatus = await tools.subToSport(sportID, session);
    if (subStatus == 200){
        res.end(JSON.stringify({registered: 1}));
        return;
    }

    if (subStatus !== 200 && !used.includes(hash)){
        res.end(JSON.stringify({registered: 0}));
        used.push(hash);
        const interval = setInterval(async () => {
            for (const e of used) {
                let sess = e.split(",")[0]
                let sport = e.split(",")[1]
                console.log("BruteForce: " + sport);
                let status = await tools.subToSport(sport, sess);
                if (status === 200) {
                    used.splice(used.indexOf(e), 1);
                    clearInterval(interval);
                }
            }

        }, 15000);
    }
    else {
        res.end(JSON.stringify({registered: -1}));
        return;
    }
}