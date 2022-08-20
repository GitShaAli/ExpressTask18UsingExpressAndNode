const User = require('../models/user');

const path = require('path');

var express = require("express");
const { name } = require('ejs');

var app = express();



exports.insertUser = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  User.create({
    name:name,
    email:email
  })
    .then(result => {
      console.log('Created User');
      User.findAll().then(users=>{
        res.render('form', {
          user: users,
          pageTitle: 'JS',
          path: '/'
        })
      })
    })
    .catch(err => {
      console.log(err);
    });
  };

  exports.regUserShow = (req, res, next) => {
    User.findAll().then(users=>{
      res.render('form', {
        user: users,
        pageTitle: 'JS',
        path: '/'
      })
    })
    .catch(err=>{
      console.log(err);
    });
    };

exports.deleteUser = (req, res, next) => {
  const userId = req.params.userId;
  User.findByPk(userId)
  .then(user=>{
    return user.destroy();
  })
  .catch(err=>{
    console.log(err);
  });
  };