const PouchDB = require('pouchdb');
const uuid = require('uuid');

const postsDb = new PouchDB ('database/posts')

class PostsService {
    async getPosts() {

        let posts = []

        await postsDb.allDocs({include_docs: true}, (err, docs) => {
            docs.rows.forEach(item => {
                posts.push(item.doc)
            })
        })

        return posts

    }

    async getOnePost (id) {

        let post

        await postsDb.get(id, (err, doc) => {
            post = doc
        })

        return post
    }

    async sendPost (post) {

        post._id = uuid.v4()
        await postsDb.put(post)

        return post

    }

    async deletePost (id) {

        await postsDb.get(id, async (err, doc) => {
            postsDb.remove(doc._id, doc._rev).then(function (result) {
                console.log(result);

                return result
            }).catch(function (err) {
                console.log(err);
            });
        })
    }
}

module.exports = new PostsService();