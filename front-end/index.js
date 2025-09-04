const app = require("express")(),
      pg = require("pg"),
      pool = new pg.Pool(config);

const CryptoJS = require("crypto-js");

let category = req.params.category;
let encryptedCategory = CryptoJS.AES.encrypt(category, 'secret key 123').toString();

// Use 'encryptedCategory' to query the database
app.get("search", function handler(req, res) {
  // GOOD: use parameters
  var query1 =
    "SELECT ITEM,PRICE FROM PRODUCT WHERE ITEM_CATEGORY=$1 ORDER BY PRICE";
  pool.query(query1, [req.params.category], function(err, results) {
    // process results
  });
});
