/*
 * Post controller
 */

'use strict'

const admin = require('firebase-admin')
const store = admin.firestore()
const posts = store.collection('posts')

exports.create = async (payload) => {
  return posts
    .add(payload)
    .then((post) => {
      return post
    })
    .catch((err) => {
      return err
    })
}

exports.update = async (payload) => {
  return posts
    .doc(payload.id)
    .update(payload)
    .then((post) => {
      return post
    })
    .catch((err) => {
      return err
    })
}

exports.delete = async (payload) => {
  return posts
    .doc(payload.id)
    .delete()
    .then((post) => {
      return post
    })
    .catch((err) => {
      return err
    })
}
