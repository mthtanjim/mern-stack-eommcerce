const bcrypt = require("bcrypt");

const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(12, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};

// main pass// tan2424
// hash   // saldfisofhjsfhosifoishfoashdfoiahsdfoihasdiofh

const comparePassword = (password, hashed) => {
    return bcrypt.compare(password,hashed)
    .then(result => {
        return result
    })
    .catch( err => {
        console.log(err)
    })
};

module.exports = {
  hashPassword,
  comparePassword
}
