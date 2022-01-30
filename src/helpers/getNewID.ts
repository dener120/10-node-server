

export function getNewID(objects: {id: number}[]) {
    let maxId = Math.max(...objects.map((object) => object.id));
    return ++maxId;
}