const postsService = require('../services/posts-service')

class PostsController {

    async getPosts(req, res, next) {
        try{
            const posts = await postsService.getPosts();

            res.json(posts);
        }catch (e) {
            console.log(e)
        }
    }

    async getOnePost(req, res, next) {
        try{
            const {id} = req.params;
            const post = await postsService.getOnePost(id)

            res.json(post)
        }catch (e) {
            console.log(e)
        }
    }

    async sendPost(req, res, next) {
        try {

            const post = await postsService.sendPost(req.body)
            console.log(post)
            res.json(post)

        }
        catch (e) {
            console.log(e)
        }
    }

    async deletePost(req, res, next) {
        try {

            console.log(req.params)
            const post = await postsService.deletePost(req.params.id)
            res.json(post)
        }

        catch (e) {
            console.log(e)
        }
    }

}

module.exports = new PostsController();