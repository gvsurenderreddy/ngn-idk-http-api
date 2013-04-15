module.exports = {
	'/': {
		get: function(req,res){
			res.send({hello:'Hello. I am root.'});
		}
	}
}
