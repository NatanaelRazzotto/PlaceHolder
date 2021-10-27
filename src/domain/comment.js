
class Comment {
    constructor(id, postId, name, email, body) {
        this.id = id,
            this.postId = postId,
            this.name = name,
            this.email = email,
            this.body = body
    }
}
module.exports = { Comment };