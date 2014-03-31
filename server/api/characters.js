var charactersMap = {
	"1": {
		id: 1,
		name: 'hero',
		prettyName: 'Hero',
		description: 'Leanato\'s Daughter, affection of Claudio'
	},
	"2": {
		id: 2,
		name: 'claudio',
		prettyName: 'Claudio',
		description: 'Lord of Florence and companion of Don Pedro'
	},
	"3": {
		id: 3,
		name: 'benedick',
		prettyName: 'Benedick',
		description: 'Lord of Padua and companion of Don Pedro'
	},
	"4": {
		id: 4,
		name: 'beatrice',
		prettyName: 'Beatrice',
		description: 'An orphan and Leanato\'s niece'
	},
	"5": {
		id: 5,
		name: 'antonio',
		prettyName: 'Antonio',
		description: 'An old man, brother of Leanato'
	},
	"6": {
		id: 6,
		name: 'don-jon',
		prettyName: 'Don Jon',
		description: 'The bastard brother of Don Pedro'
	}
};

var characters = function (app) {

	var charactersAPI = {
		all: function() {
			var characters = [];

			for (var key in charactersMap) {
				characters.push(charactersMap[key]);
			}
			return characters;
		}
	};

	app.get('/api/characters', function(req, res){
		console.log('Requesting all characters');

		// Simulate delay in server
		setTimeout(function() {
			res.json(charactersAPI.all());
		}, 500);
	});

	app.get('/api/characters/:id', function(req, res) {
		console.log('Requesting character with id', req.params.id);
		res.json(charactersMap[req.params.id]);
	});

	return charactersAPI;
};

module.exports = characters;