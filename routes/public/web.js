/**
 * Required modules
 */
const router = require('express').Router();

/**
 * Required controllers
 */
const UserController = require('../../controllers/public/UserController');

/**
 * Required middlewares
 */
const Middleware = require('../../middlewares/Middleware');

/**
 * Naming routes
 */
const routes = {
  user: UserController.routes
};

/**
 * Available routes in application
 */
router.get(routes.user.index, [ Middleware.handle, UserController.index ]);
router.post(routes.user.store, UserController.store);

/**
 * Router export
 */
module.exports = router;
