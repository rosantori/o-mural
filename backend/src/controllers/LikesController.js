const connection = require('../database/connection');

module.exports =  {
    async create(request, response) { 
        const { user_id, post_id, like} = request.body;

        try{
            const [res] = await connection('likes').insert({user_id, post_id, like});
        } catch(err) {
            return response.status(500).send(err);
        }
        return response.status(200).send();
    },
    async delete(request, response) {
        const {user_id, post_id} = request.body;

        try {
            const res = await connection('likes')
                .where("user_id", user_id)
                .where("post_id", post_id)
                .del();
        } catch (err) {
            return response.status(400).send(err);
        }

        return response.status(200).send();
    },
    async index(request, response) {
        const {user_id, post_id} = request.body;
        var res = 0;
        try { 
            [res] = await connection('likes').where("post_id", post_id).where("user_id", user_id).count();
            res = res['count(*)'];
            console.log("RESSS = ");
            console.log(res);

        } catch (err){
            console.log(err);
            return response.status(400).send(err);

        }
        return response.send(res? true : false);
    }
 }