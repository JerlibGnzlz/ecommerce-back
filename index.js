const server = require("./src/app.js");
const { conn } = require("./src/db.js");

const { PORT } = process.env;
// const {saveCountries}=require("./src/util/countryCreate")
// const {saveProducts}=require("./src/util/paymentTypeCreate")
const { superData } = require("./src/util/superDataCreate");

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
    superData();
  });
});
