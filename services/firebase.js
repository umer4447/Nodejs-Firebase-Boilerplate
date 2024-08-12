/**
 * Firebase
 */

'use strict'

const admin = require('firebase-admin')
/**
 * Service key from Firebase required.
 */
const serviceAccount = require('../serviceAccountKey.json')

exports.init = () => {
  /*
     * Init your firebase app
     */
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.DATABASE_URI,
  })
}
