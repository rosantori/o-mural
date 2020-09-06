const crypto = require('crypto');
const connection = require('../database/connection');
const bcrypt = require('bcrypt');

module.exports = {
    async index (request, response) {
        const users = await connection('users').select('*');
    
        return response.json(users);
    },
    async create(request, response) {//o async é para esperar que isso seja realizado (o que está no await)
        const {username, email, name, password} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        
        try{
            let salt = await bcrypt.genSalt();
            hashedPassword = await bcrypt.hash(password, salt);
        } catch {
            return response.status(500).send("error password");
        }

        await connection('users').insert({ 
            id, username, email, name, hashedPassword
        })
        return response.json({ id });
    },
    async delete(request, response) {
        const user_id = request.headers.authorization;
        try{
            await connection('users').where('id', user_id).del();
        } catch {
            return response.status(400).send("Error deleting user");
        }

        return response.status(200).send();
    }
    
}