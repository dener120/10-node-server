import fs from "fs";

export function getJsonData(path:string) {
    return JSON.parse(fs.readFileSync(path, "utf-8"));
}

export  function writeJsonDate(path:string, object:Object[]) {
    fs.writeFile(path, JSON.stringify(object), (err) => {
        if (err) console.log('error')
    })
}