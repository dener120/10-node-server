
export function isRegistered(usersList:{email:string, password:string}[], reqBody:{email:string | undefined, password:string | undefined}, logOrReg:'log'|'reg'){
    if (logOrReg === 'log') {
        return usersList.some((user):boolean => user.email === reqBody.email || user.password === reqBody.password);
    } else if (logOrReg === 'reg') {
        return usersList.some((user):boolean => user.email === reqBody.email && user.password === reqBody.password);
    }
}