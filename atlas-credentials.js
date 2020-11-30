const username = "Tengil";
const password = "19salkin";
const clusterUrl = "cluster0.uyi1l.mongodb.net";
const dbName = 'kliMat';

module.exports.uri = `mongodb+srv://${username}:${password}@${clusterUrl}/${dbName}?retryWrites=true&w=majority`;