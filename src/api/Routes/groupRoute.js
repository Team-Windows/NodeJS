module.exports = (app) => {
    const groupController = require('../Controllers/groupController');

    app.route('/groups')
        .get(groupController.list_all_groups)
        .post(groupController.create_a_group);

    //app.route('/post/:post_id')
    //    .get(postController.get_a_post)
    //    .put(postController.update_a_post)
    //    .delete(postController.delete_a_post);

};