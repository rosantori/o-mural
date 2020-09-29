const connection = require('../database/connection');

async function starTOGGLE(post, user_id) {
    //console.log(posts);
/*    let newPosts = posts.map(async post =>{
        try {
         var [toggle] = await connection('likes')
            .where('post_id', post.id)
            .where('user_id', user_id)
            .count();
        } catch (err) {
            return response.status(500).send(err)
        }
        post.title='Rosana';
        post.starToggle = (toggle['count(*)'] ? true : false);
    });
    console.log(newPosts);
    return newPosts;
*/
    var res = 0;
    try { 
        [res] = await connection('stars').where("post_id", post.id).where("user_id", user_id).count();
        res = res['count(*)'];

    } catch (err){
        console.log(err);
        return response.status(400).send(err);

    }
    return (res? 1 : 0);

}

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
        var user_id = request.headers.authorization;

        const [count] = await connection('posts').count();

        var posts = await connection('posts')
        .join('users', 'users.id', '=', 'posts.user_id')
        .limit(5)                   //essas duas linhas são
        .offset((page - 1) * 5)         //para paginamento
        .select(['posts.*', 'users.username']);

        posts = await Promise.all(posts.map( async post=> {
            post.starToggle = await starTOGGLE(post, user_id);
        })).then(() => {
            response.header('X-Total-Count', count['count(*)']);
            return response.json(posts);
        })
                
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