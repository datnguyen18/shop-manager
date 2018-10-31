const promisify = query => new Promise((resolve, rejects) => {
  query.then((data) => {
    resolve(data);
  }).catch((err) => {
    rejects(err);
  });
});
module.exports = promisify;
