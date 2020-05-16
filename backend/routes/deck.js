const router = require('express').Router();
let Deck = require('../models/deck.model');

router.route('/').get((request, response) => {
    Deck.find()
        .then(deck => response.json(deck))
        .catch(error => response.status(400).json('Error: ' + error));
});

router.route('/add').post((request, response) => {
    const user = request.body.username;
    const card = request.body.card;
    const newDeckItem = new Deck({username, card});
    
    newDeckItem.save()
        .then(() => response.json(`The ${card.name} has been added to the Deck successfully!`))
        .catch((error) => response.status(400).json('Error: ' + error));
});

router.route('/:id').get((request, response) => {
    Deck.findById(request.params.id)
        .then(deckItem => response.json(deckItem))
        .catch(error => response.status(400).json('Error: ' + error));
});

router.route('/:id').delete((request, response) => {
    Deck.findByIdAndDelete(request.params.id)
        .then(() => response.json('Card has been deleted from the Deck!'))
        .catch(error => response.status(400).json('Error: ' + error));
});

module.exports = router;