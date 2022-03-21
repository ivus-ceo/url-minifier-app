/**
 * Required modules for controller
 */
const User = require('../../models/User');

/**
 * Export of controller
 */
module.exports = class Controller {
  /**
  * Getter for routes.
  *
  * @return Routes
  */
  static get routes() {
    return {
      index: '/users',
      create: '/users/create',
      store: '/users',
      show: '/users/:id',
      edit: '/users/:id/edit',
      update: '/users/:id',
      delete: '/users/:id'
    };
  }

  /**
  * Display a listing of the resource.
  *
  * @return Response
  */
  static index(req, res) {
    res.send('Information has come from the server!')
  }

  /**
  * Show the form for creating a new resource.
  *
  * @return Response
  */
  static create(req, res) {
    //
  }

  /**
  * Store a newly created resource in storage.
  *
  * @return Response
  */
  static async store(req, res) {
    const { name } = req.body
    await User.create({ name })
  }

  /**
  * Display the specified resource.
  *
  * @param  int  $id
  * @return Response
  */
  static show(req, res) {
    //
  }

  /**
  * Show the form for editing the specified resource.
  *
  * @param  int  $id
  * @return Response
  */
  static edit(req, res) {
    //
  }

  /**
  * Update the specified resource in storage.
  *
  * @param  int  $id
  * @return Response
  */
  static update(req, res) {
    //
  }

  /**
  * Remove the specified resource from storage.
  *
  * @param  int  $id
  * @return Response
  */
  static delete(req, res) {
    //
  }
};
 