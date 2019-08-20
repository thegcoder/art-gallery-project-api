const mongoose = require('./connection.js');

// Artwork schema
const ArtWorkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    imageUrl: {
        type: String,
        default: 'https://place-hold.it/300x500'
    },
    type: {
        type: String,
        default: 'artwork'
    }
});

// Artists schema
const ArtistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    bio: String,
    imageUrl: {
        type: String,
        default: 'https://place-hold.it/300x500'
    },
    type: {
        type: String,
        default: 'artists'
    }
});

// Genre schema
const GenreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: String,
    imageUrl: {
        type: String,
        default: 'https://place-hold.it/300x500'
    },
    type: {
        type: String,
        default: 'genre'
    }
});

// ArtWorks collection
const ArtWorks = mongoose.model('ArtWorks', ArtWorkSchema);

// Users collection
const Artists = mongoose.model('Artists', ArtistSchema);

// Genres collection
const Genres = mongoose.model('Genres', GenreSchema);


module.exports = {
  ArtWorks,
  Artists,
  Genres
}
