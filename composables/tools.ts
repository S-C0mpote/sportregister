import fetch from "node-fetch";

async function login(username, password){

    let data =  await fetch("https://cas-ha.univ-nantes.fr/esup-cas-server/login?service=https://unsport.univ-nantes.fr/web/authenticate", {
        "headers": {
            "content-type": "application/x-www-form-urlencoded",
        },
        "redirect": "manual",
        "body": `username=${username}&password=${password}&otpPassword=&u2fSignature=&execution=397d3763-7138-4c20-90a8-2c0514b4b598_ZXlKaGJHY2lPaUpJVXpVeE1pSjkubnR2cjRCc0RjejZIN0VWeTBQekFxZ2lkVzJIL0wrTEhOb2JNRVZQVWQ5RUVyekVMUzdLVnNOSTdGUjZNem9VYkpTMU5jalkwa3JMaFJKbW01MGR6bEx6OGV2bVhhUnlDTC81c2JRYzFaMWRpUDQ0enJ3VHU5WEk4Qld3ejVLY2tRaTJHL0tsd1czeHE3a1JVSUZKMFBHa1Z6aUxmTlJxS09ERFQzbWFicnpjd2pUNjJEMmp6aVJoZ2pPR2crMGh2Y056Y1lWM1RvTnN5dHFKZHFHeW9zNnBzYXNzUE5VbEpjNUladCtZeEl0aWpJZWNlazdqZlRPK2QxREV0K3hSYTRQQnhqRXo1ZWtIMHVpUlVTZUtXc1liaWdlUWdocWJ1L1cramsyRjh0d1pVd2dYRjJKemJZTFpOZHEwa0VqSytUT281bTludnlSL1Z3NGg4bDhINHF5eEFYc0s5TVRPK3piNDdiUnBiVmF4OW01eGxtbFNtVU1xMmlQenJDRzNuTUI1bFJmdlhud3RYQm1XcWJTU0JtaGo2T3BrS3hBTGVhSUdJejluYzhrdGJYK25WQWh3Q0RWWXRzYXVHcmZyWUE5M1dSK0hMTi92dXB1NCtSYUE2N09HSEFJNlZiV2c3c0d5L21RUWt5enNQNnExVVVmKzlLUVI2QzlmUXdaUmZLOUFGaW5SMmJiNTgvWlRKcDM5WnVzN0hKbFZIbWtpK0lWTENFMHFtVXVPNFBNcWlSVkUyRGkvNFBXMmJDZTUxR29ob2svdFQ4Nm5lZHA5YVZXU3hwcnNRN0Q2b2NYcW14L0FVd050cnFBLzZpTWNmOWFmWFFYWjFSVTlpZDZpNlhuM3I4dkQ3UzlDdnNrejFjVEJ2S1JWWHBtVlVEK2lHV3BZWVJrYjYwVzBSR09BbkRaRjlTeVdzSWV3ZkxNUzVOOEtZMkRiKy9KV3NBTTJPL0JGNXRsMEhwMWlWdFNHZ1RvRElRNWNjS0VOd2ttVlljNHlpY1ZMRmRhRFpCNVptTStsK0FmQTE0WGhyZE00UDZHUzAvT0htdjdnc3N2ZWZ3R2J1TDUwVkREcU9hSHJVMHNJVHE2Q2lnVDVRSUVUODdHdkJleUZLQ2pzQzZlemJ5d2RUbFYxcUE0VnoxVkZpcUlVdE5iV0RCRm1VUzI5TE9lNERIamc5cVZOMmZvQVFKVEtLTndPSSt5YWtUN3FMMnIzcjNRYVRLVVAzRWZjSFVtK3Nxc0tCblZUa1lrSTdhV20ydk5IbEwwVzNHV3hvZm5URTZ1S2tYYkd1djNYeFVjNkFZdTM2ZjQwaW5uYUhjV2ZNeG9LTnVzT3BXZTRtbWdEZmRwU3NTU2x1bVgzdnhnMmxsc2pKcHd6QWI3Y3ZNL1FxanB0dlJzaGxlb3dVRTluRngxNGtFcjdsV2ltZGdKWWZkU2EzWnJINHRSc0lmU1lHSjhPaXJIL29wbzJyTFN5bVZPeUR4d2pheUljVVlZTitVbHg0YzBBRkFqOVpTSDVzS2dPT3NlVkJNVXZQdG9YR3A2Q2QwVGpxTUtvOHJsMUhHQU9HYlZORjk3aURManZIVFpiU2ZScS9XT0R3ak9DR1pmeS8zejdZdkF5Qm1SZ1E4OThETHIwKy83RGc4Y09XVjVGMzZmZkMzRGxsZTlTamFGT2dkWllLRWdwVU03M1VjZmhadDFFWHlnRldjd2R5ejYxbFhray9uVWRTYXllWXZZQlVMbkRWVlRpSHZ5OUFnUGgxbmdCRWQ4Q2VQZDdCVVdCbVRNYzJSeXFtb3QrV1JDTjBWeXp1TWdPK0FDb1JoSEwrMzZjOW5MWktsYklpbklFS051QzY0cS9OWnRPL3F2eEZwbUpQK2d2YXFOOW96WVI2L2UxVWU4Rm91SXFaRXlsNGlHWk9kdzU3QXVKUzNvbGNjUzRMQzlKYmRNYWh1WW9lSU1aK2JmbFBCYjdtcmtHOEd1a1pQYzNqN3FNRURJN2FUMjZadWFxYlNIa2RkYkRWZW9GbWFYZEIvVFN4VXpCbGhZaFVwZllMcnREcEx6bVI5aDNrWnBWU2JoRjgybXhwemg4MmRUUUg4SzhYVVNKK3h6UUVidXoyN2VjZUxEazFNQktRKzB0SGQ4ZndPR3dOaHZOcGY3Z0t4dWsyeTg2aEpFcWxjSkRWVEN2Rk8zUGhvd2JDNTd6OVliZnUxTWwxS3JNcXFkN3hsMEVIejVSU0hXRktYc3B0Y1g2aDg4eGhtd2cxUnIzZnp1UGpJelE0U2pWbXFtSXBiVWxLMFZxNFJJdWZla0hIRHcwcG1FUXEwRnhSS2dDeFFPU0RyUlNueVVpZGF0VXRpbnZYSWJoSWN4SU9tR2xWaXNNUGEveDUvYzJFOGZtRHY5YjBSeUJRbHZPZ05Bby9ldG1FcEo4ZUNkTkF5aklBVnBzRzdGWVRlM0ZvRzZqZ0NzMWlpYzJIUnYvSlpwTVhRT0xrMndzNjFKTWZ5dTZ0MEpQSGovK1lQZ2taYWJOTlF5d3FGdGIvWjI5ZXg1YXcrOFBRNkljanA0Q1NXR0gzanpvM01wa1VKNCt1bkhSVUVOaGV6R3ZHVmVoY29kUmROeDZONEgra0NnU0dGcjZtSTZZUXZxc2lUOXZsaUtCa2UxWS9OMVZJQmRhdmI2YkhLZ01XamNrRVdUY2hvMHphUmVHUmdUUnM0aTRxSytHZkZJY01iUXhHb09yeGxOYngwb09xNWs1TGJSRGhNaExVTXdkQ0lOQzZKZU9IRFFhTWxkQXBwZ3dFa0U4a2UyaFpHM1g0a0ZkR0tsb2VqV0RUTU5rcEEyVy9vV25RdlArRFZLcVVFZHZDcGo5T2ZocVRuVGdpd1YzVVIxWS91NXNsT25Yd2FrUEJlN0tzQ3c5bzhJUFVBSHUzRU5ZTXJYWmZmeWxTYkRLQzZka0xoa2NYMU5lQUZEY1REemszdEw4NVJ4SWYycVpBcHEyZzI1RloweUdsSHUvb3ZIMCtBSHBDekZEa0FBYUxLZVBZSkVTckRCRGpYTFV2SUpUZUVGaUNQdjZHblNKY2YreXRGbnhSUUFEVzJ2SW9OOUhXME95aXU2TzV2ZUt5eStzYTFYNHBCclNXd1lJcHJBcTJiMUV2dnY3NkZLOFFQVU4rZTR4Z0JXYmN3bzdxemN3QzJxSlBuaitIS3Q1WTBINVU2b2I0NVhaMG9WZlZObFFyODdDd1B1ZElaSEZlcWFsZkJrQThYbDIvVFRZbFFHRG4zVGc3QTgzYisybWhoVElkUU9oUlB1VzdpNWIrZ0JLWEI1blhWd1dUamNsRGZCVCtHaXhtRWFtVHpPZU91VVY0Z3d1SXB6dFhqNitnTWR3ZUVWV0xTRklLancwajJBbnd3SWR1ZGpkS3N6SVI4WkVuRFdhYjR4dEtjRjRWMFdTTkR3WkkzYTd3U21BSkpKclk5MmdubGs2YXpnNEc2MDNvemtDWFkxYlR0VmVEQVNFeXpHQ0FsaVVZaFFoSVRVTHExK0ZEbFkzenZkbGM0UHdJWEhjdnRQS1crejhqdkhzb0t4MDNaUGdIWkhFTk83RkNxVWUweXFVYWZtREhLa2paQWhjK0FMUkNNUHZMTzZ1OHVaRjNsZk1IQjNWbDNrOElkUTBOSnZTdHQzcGNFYzd0UlZBSGFOb3ZIK3V3Vmo2d1F5eHlLVjhQYWI4eHJ5enlJSHllVzZ4aDRSNk0rR0YwTkVhcWdQUnBrSWZPeXBWRm5XR3QwM1Bab3doRVZKTlNROGdkQ3ZyM01pY3g2b2QxcGpEd3JMVVFOcEJUbkRRVmlwWHJZT1VXbnhQMU5EbVB6ZGhxUzVDRVdUY0RJRlhCV01pVUhtUm5raE9BSDBERXVMWC95bnMwTG0zVzArWUhKVnVVMnZJdGRKNGhoMXI2T1VyNHNsZHBVOHJQRHdMK1o4MWg5elZjUGtZWGRsVFVPS3JhUjBVd2plUm9SUHM9Lm56ckNFeXZtbzJ5Y0pFRUVhMnl6NXFjUkpGczRmYVBFNjFjd1ZuM1ZJWGs4cXprc3gxZ0hCTHVBdUhLV28tSWtwZndfeDhJQ3hyekhkcGhHc3FoTV9R&_eventId=submit&geolocation=`,
        "method": "POST"
    });
    let ticket = data.headers.get('location');
    if (data.status !== 302) return 401;
    let data2 = await fetch(ticket, {
        "redirect": "manual",
        "method": "GET"
    });
    let session = data2.headers.get('set-cookie').split(',')[4].split(';')[0]
    let data3 = await fetch("https://unsport.univ-nantes.fr/web/api/user", {
        "headers": {
            "cookie": `${session}`,
        },
        "body": null,
        "method": "GET"
    });
    let data3Json = await data3.json();
    return [data2.status, session, data3Json];

}
async function subToSport(id, session){
    const data = await fetch(`https://unsport.univ-nantes.fr/web/api/creneaux/${id}?typePersonne=GE`, {
        "headers": {
            "cookie": `_fbp=fb.1.1639327683753.524414479; _pk_ref.9.d553=%5B%22%22%2C%22%22%2C1645708527%2C%22https%3A%2F%2Fwww.google.com%2F%22%5D; _pk_id.9.d553=6a3d98076fb314a0.1645708595.; ${session}`,
        },
        "body": "{}",
        "method": "PUT",
    });
    return data.status;
}

async function unsubToSport(id, session){
    const data =  await fetch(`https://unsport.univ-nantes.fr/web/api/creneaux/${id}`, {
        "headers": {
            "cookie": `_fbp=fb.1.1639327683753.524414479; _pk_ref.9.d553=%5B%22%22%2C%22%22%2C1645708527%2C%22https%3A%2F%2Fwww.google.com%2F%22%5D; _pk_id.9.d553=6a3d98076fb314a0.1645708595.; ${session}`,
        },
        "body": null,
        "method": "DELETE"
    });
    return data.status;
}

async function updateInfos(session){
    const data = await fetch("https://unsport.univ-nantes.fr/web/api/user", {
        "headers": {
            "cookie": `${session}`,
        },
        "body": null,
        "method": "GET"
    })
    return await data.json()
}

function hashCode(s) {
    let h;
    for(let i = 0; i < s.length; i++)
        h = Math.imul(31, h) + s.charCodeAt(i) | 0;
    return h;
}
export default {
    login,
    hashCode,
    subToSport,
    updateInfos,
    unsubToSport
}
