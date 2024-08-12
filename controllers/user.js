/*
 * User controller
 */

'use strict'

const admin = require('firebase-admin')

exports.create = async (payload) => {
  return admin
  .auth()
  .createUser({
    email: payload.email,
    password: payload.password,
  })
  .then(function(userRecord) {
    return userRecord
  })
  .catch(function(error) {
    return false
  })
}

exports.delete = async (uid) => {
  return admin
  .auth()
  .deleteUser(uid)
  .then(function(userRecord) {
    return userRecord
  })
  .catch(function(error) {
    return false
  });
}

exports.find = async (uid) => {
  return admin
  .auth()
  .getUser(uid)
  .then(function(userRecord) {
    return userRecord
  })
  .catch(function(error) {
    return false
  })
}

exports.update = async (uid, payload) => {
  return admin
  .auth()
  .updateUser(uid, {
    disabled: payload.disabled,
    emailVerified: payload.emailVerified,
    email: payload.email,
    password: payload.password,
  })
  .then(function(userRecord) {
    return userRecord.toJSON()
  })
  .catch(function(error) {
    return false
  })
}
