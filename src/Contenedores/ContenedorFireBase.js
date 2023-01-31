const firebase = require('firebase');

class FirebaseContainer {
  constructor() {
    this.firebaseConfig = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID
    };

    firebase.initializeApp(this.firebaseConfig);
    this.db = firebase.firestore();
  }

  async createDocument(collection, data) {
    const docRef = await this.db.collection(collection).add(data);
    return docRef.id;
  }

  async getDocument(collection, id) {
    const docRef = this.db.collection(collection).doc(id);
    const doc = await docRef.get();
    return doc.data();
  }

  async updateDocument(collection, id, data) {
    const docRef = this.db.collection(collection).doc(id);
    await docRef.update(data);
    return id;
  }

  async deleteDocument(collection, id) {
    const docRef = this.db.collection(collection).doc(id);
    await docRef.delete();
    return id;
  }
}

module.exports = FirebaseContainer;