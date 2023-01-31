const MongoClient = require('mongodb').MongoClient;

class MongoContainer {
  constructor(uri, dbName) {
    this.uri = uri;
    this.dbName = dbName;
    this.client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  }

  async connect() {
    await this.client.connect();
    this.db = this.client.db(this.dbName);
  }

  async createDocument(collectionName, document) {
    const collection = this.db.collection(collectionName);
    const result = await collection.insertOne(document);
    return result.ops[0];
  }

  async getDocument(collectionName, id) {
    const collection = this.db.collection(collectionName);
    return await collection.findOne({ _id: id });
  }

  async updateDocument(collectionName, id, update) {
    const collection = this.db.collection(collectionName);
    return await collection.findOneAndUpdate({ _id: id }, { $set: update }, { returnOriginal: false });
  }

  async deleteDocument(collectionName, id) {
    const collection = this.db.collection(collectionName);
    return await collection.deleteOne({ _id: id });
  }
}

module.exports = MongoContainer;