const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const {title, description} = request.body;
        const user_id = request.headers.authorization;
        
        const [id] = await connection('posts').insert({ //Esse id é o retorno do insert
            title, description, user_id
        });
        
        return response.json( { id } );
        
    }, 
    async index(request, response) {
        const {page = 1} = request.query; 
        
        const [count] = await connection('posts').count();

        const posts = await connection('posts')
        .join('users', 'users.id', '=', 'posts.user_id')
        .limit(5)                   //essas duas linhas são
        .offset((page - 1) * 5)         //para paginamento
        .select(['posts.*', 'users.username']);
        
        response.header('X-Total-Count', count['count(*)']);
        return response.json(posts);
        
    }, 
    async delete(request, response) {
        const { id } = request.params;
        const user_id = request.headers.authorization;

        const post = await connection('posts').where('id', id).select('user_id').first();

        if(post.user_id !== user_id) {
            return response.status(401).json({error: 'Operation not permitted.'});
        }

        await connection('posts').where('id', id).delete();

        return response.status(204).send(); //send() enviar resposta sem corpo
        
    }


}