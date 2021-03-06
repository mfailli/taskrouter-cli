const fs = require('fs');

module.exports = {
  ensureDirExists : (path, mask, cb) => {
      if (typeof mask == 'function') { // allow the `mask` parameter to be optional
          cb = mask;
          mask = 0777;
      }
      fs.mkdir(path, mask, function(err) {
          if (err) {
              if (err.code == 'EEXIST') cb(null); // ignore the error if the folder already exists
              else cb(err); // something else went wrong
          } else cb(null); // successfully created folder
      });
  },

  ensureFileExists : (ensureFilePath) => {
    try {
        return fs.statSync(ensureFilePath).isFile();
      } catch (err) {
        return false;
      }
  }
};
