var express = require('express');
var router = express.Router();
var auth = require('../api/auth/auth');
var user = require('../api/userCtrl');
var tpr = require('../api/tprCtrl');
var admin = require('../api/adminCtrl');
var common = require('../api/commonCtrl');
var roles = require('../api/auth/roles');

/*
*AUTHENTICATION ROUTES
*/
router.post('/login', auth.alreadyLoggedIn, auth.loginAuthenticate);
router.post('/logout', auth.logout);

/*
/USER ROUTES
*/
router.get('/appliedFor', auth.isLoggedIn, roles.isUser, user.appliedFor);
router.get('/placedIn', auth.isLoggedIn, roles.isUser, user.placedIn);
router.get('/canApply', auth.isLoggedIn, roles.isUser, user.canApply);

/*
*ROUTES RELATED TO COMPANY
*/
router.get('/company/visited', auth.isLoggedIn, common.companies);
router.get('/company/posted', auth.isLoggedIn, roles.isAuthorized, common.posted);
router.post('/company/add', auth.isLoggedIn, roles.isAuthorized, common.addCompany);
router.post('/company/edit', auth.isLoggedIn, roles.isAuthorized, common.editCompany);
router.delete('/company/delete/:id', auth.isLoggedIn, roles.isAuthorized, common.deleteCompany);
router.get('/company/canApply', auth.isLoggedIn, roles.isUser, user.canApply);

/*
*TPR ROUTES
*/
router.post('/invite', auth.isLoggedIn, roles.isTpr, tpr.ifBranch, tpr.inviteAll);
router.get('/inviteSent', auth.isLoggedIn, roles.isTpr, tpr.ifBranch, tpr.inviteSent);
router.get('/database', auth.isLoggedIn, roles.isTpr, tpr.getDatabase);
router.get('/ifDb', auth.isLoggedIn, roles.isTpr, tpr.ifDb);
router.post('/uploadDb', auth.isLoggedIn, roles.isTpr, tpr.uploadDatabase);
router.post('/addDb', auth.isLoggedIn, roles.isTpr, tpr.addDatabase);
router.post('/ifAddedToDb', auth.isLoggedIn, roles.isTpr, tpr.getDatabase);
/*
*ADMIN ROUTES
*/
router.post('/admin/addtpr', auth.isLoggedIn, roles.isAdmin, auth.signupAuthenticate);
router.get('/database/:branch', auth.isLoggedIn, roles.isAdmin, admin.getDatabase);
/*
*COMMON ROUTES
*/
router.get('/tpr/all', auth.isLoggedIn, roles.isAuthorized, common.listTpr);

router.get('*', function(req, res){
  res.redirect('/');
})
module.exports = router;
