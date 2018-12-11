var promise = require('bluebird');

var options = {
	// Initialization Options
	promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://local.node-api-generic.com:5432/puppies';
var db = pgp(connectionString);

// add query functions

module.exports = {
	getAllPuppies: getAllPuppies,
	getSinglePuppy: getSinglePuppy,
	createPuppy: createPuppy,
	updatePuppy: updatePuppy,
	removePuppy: removePuppy
};

function getAllPuppies(req, res, next) {
	console.log('success');
  // db.any('select * from pups')
  //   .then(function (data) {
  //     res.status(200)
  //       .json({
  //         status: 'success',
  //         data: data,
  //         message: 'Retrieved ALL puppies'
  //       });
  //   })
  //   .catch(function (err) {
  //     return next(err);
  //   });
}
