const router = require("express-promise-router")()
const orderController = require('../controllers/order')
const passport = require('passport')

router.route('/')
    .get(passport.authenticate('jwt', { session: false }), orderController.getAllOrder)
    .post(passport.authenticate('jwt', { session: false }), orderController.addOrder)
router.route('/revenue')
    .get(passport.authenticate('jwt', { session: false }), orderController.revenue)
router.route('/revenue-list')
    .get(passport.authenticate('jwt', { session: false }), orderController.revenueList)
router.route('/session-order')
    .get(passport.authenticate('jwt', { session: false }), orderController.sessionOrder)
router.route('/:IDOrder')
    .get(passport.authenticate('jwt', { session: false }), orderController.getAnOrder)
    .put(passport.authenticate('jwt', { session: false }), orderController.updateOrder)
    .delete(passport.authenticate('jwt', { session: false }), orderController.deleteOrder)
router.route('/email/:IDOrder')
    .get(passport.authenticate('jwt', { session: false }), orderController.requestSendEmail)
router.route('/confirm/:tokenOrder')
    .get(passport.authenticate('jwt', { session: false }), orderController.confirmOrder)

module.exports = router