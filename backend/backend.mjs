import PocketBase from 'pocketbase' ;	
const pb = new PocketBase(`http://127.0.0.1:8090`) ;

export async function allFilmsSorted() {
    const allFilmsSorted = await pb.collection('films').getFullList({ sort : 'date_projection', }) ;
    return  allFilmsSorted ;
}

export async function allActivitiesSorted() {
    const allFilmsSorted = await pb.collection('activites').getFullList({ sort : 'date_debut_activite', }) ;
    return  allFilmsSorted ;
}

export async function AllInvite() {
    const records = await pb.collection('invites').getFullList({ sort: 'nom' });
    return records;
}

export async function oneID(id) {
    const oneRecord = await pb.collection('films').getOne(id);
    return oneRecord;
}

export async function oneIDActivite(id) {
    const oneRecord = await pb.collection('activites').getOne(id);
    return oneRecord;
}

export async function oneIDInvite(id) {
    const oneRecord = await pb.collection('invites').getOne(id);
    return oneRecord;
}

export async function allActiviteByInvite(id) {
    return await pb.collection('activites').getFullList({
        filter: `invite_activite.id = '${id}'`,
        expand: 'invite_activite',
    });
}

export async function allActiviteByName(nom) {
    return await pb.collection('activites').getFullList({
        filter: `invite_activite.nom = '${nom}'`,
        expand: 'invite_activite',
    });
}

export async function addNewFilm(newFilm) {
    return await pb.collection('films').create(newFilm);
}

export async function addNewInvite(newInvite) {
    return await pb.collection('invites').create(newInvite);
}

export async function addNewActivite(newActivite) {
    return await pb.collection('activites').create(newActivite);
}

export async function updateFilmById(id, data) {
    return await pb.collection('films').update(id, data);
}

export async function updateInviteById(id, data) {
    return await pb.collection('invites').update(id, data);
}

export async function updateActiviteById(id, data) {
    return await pb.collection('activites').update(id, data);
}