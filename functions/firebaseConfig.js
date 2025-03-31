// functions/firebaseConfig.js
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
admin.initializeApp();

// Now you can access Firebase services like Firestore, Storage, etc.
const db = admin.firestore();
const storage = admin.storage();

module.exports = { admin, db, storage };
