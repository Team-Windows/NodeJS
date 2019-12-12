module.exports = (app) => {
    const userController = require('../Controllers/userController');

    app.route('/users')
        .get(userController.list_all_users)
        .post(userController.create_a_user);

    app.route('/user/:user_id')
        .get(userController.get_a_user)
        .put(userController.update_a_user)
        .delete(userController.delete_a_user);

};