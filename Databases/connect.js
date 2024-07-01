const mongoose = require('mongoose');

async function connect() {
  await mongoose.connect(process.env.MongoURL, {
			useNewUrlParser: true,
			autoIndex: false,
			connectTimeoutMS: 10000,
			useUnifiedTopology: true,
		})
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("connected", function() {
    console.log('✅ Đã Kết Nối Tới Database'.bold.brightBlue)
  });
  return;
}

module.exports = connect;

