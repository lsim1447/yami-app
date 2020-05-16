const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const deckSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    card: {
        type: Schema.Types.ObjectId,
        ref: 'Card'
    }
}, {
    timestamps: true,
});

const Deck = mongoose.model('Deck', deckSchema);

module.exports = Deck;