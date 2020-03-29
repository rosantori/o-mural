const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const users = await connection('users').select('*');
    
        return response.json(users);
    },
    async create(request, response) {//o async é para esperar que isso seja realizado (o que está no await)
        const {username, email, name, country} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('users').insert({ 
            id, username, email, name, country
        })
        return response.json({ id });
    }
}