//const fs = require('fs');
import users from '../data/users.json'

export const usersRepo = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

function getAll() {
    return users;
}

function getById(id) {
    console.log('(3) user-repo')
    //console.log('id ' + id)
    return users.find(x => x.id.toString() === id.toString());
}

function create({ firstName, lastName, email, role }) {
    const user = { firstName, lastName, email, role };

    // validate
    if (users.find(x => x.email === user.email))
        throw `User with the email ${user.email} already exists`;

    // generate new user id
    user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;

    // set date created and updated
    user.dateCreated = new Date().toISOString();
    user.dateUpdated = new Date().toISOString();

    // add and save user
    users.push(user);
    //saveData();
}

function update(id, {  firstName, lastName, email, role }) {
    const params = { firstName, lastName, email, role };
    const user = users.find(x => x.id.toString() === id.toString());

    // validate
    if (params.email !== user.email && users.find(x => x.email === params.email))
        throw `User with the email ${params.email} already exists`;

    // only update password if entered
    if (!params.password) {
        delete params.password;
    }

    // set date updated
    user.dateUpdated = new Date().toISOString();

    // update and save
    Object.assign(user, params);
    //saveData();
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id) {
    // filter out deleted user and save
    users = users.filter(x => x.id.toString() !== id.toString());
    saveData();
    
}

// private helper functions
/*
function saveData() {
    fs.writeFileSync('data/users.json', JSON.stringify(users, null, 4));
}
*/