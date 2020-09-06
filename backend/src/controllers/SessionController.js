const connection = require('../database/connection');
const bcrypt = require('bcrypt');

module.exports = {
    async create(request, response) {
        const { username , password } = request.body;
        const user = await connection('users').where('username', username).select('name','id').first();
        
        if(!user) {
            return response.status(400).json({error: 'No User found with this ID'});
        }
        const {hashedPassword} = await connection('users')
        .where('username', username)
        .select('hashedPassword')
        .first();

        if(!hashedPassword) {
            return response.status(400).json({error: 'No hashedpassword found'})
        }

        try{
            let res = await bcrypt.compare(password, hashedPassword);
            if (!res){
                return response.status(401).send("Wrong password");
            }
        } catch {
            return response.status(500).send("Error error error");
        }
        
        return response.json(user);
    }
}