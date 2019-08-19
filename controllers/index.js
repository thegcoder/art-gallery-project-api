const { ArtWorks, Artists, Genres } = require('../models');

// Get All
async function all(type) {
    let data = Promise.resolve(false);
    switch (type) {
        case 'artworks':
            data = await ArtWorks.find({});
            return data;
            break;
        case 'artists':
            data = await Artists.find({});
            return data;
            break;
        case 'genre':
            data = await Genres.find({});
            return data;
            break;
            default:
            return data;
    }
}

// Create Operations
async function create(type, object) {
    let data = Promise.resolve(false);
    console.log(`Type: ${type}`);
    console.log(object);
    switch (type) {
        case 'artworks':
            data = await ArtWorks.create(object);
            return data;
            break;
        case 'artists':
            data = await Artists.create(object);
            return data;
            break;
        case 'genre':
            data = await Genres.create(object);
            return data;
            break;
        default:
            return data;
    }
}

// Read Operations
async function read(type, id) {
    let data = Promise.resolve(false);
    switch (type) {
        case 'artworks':
            data = await ArtWorks.findById(id);
            return data;
            break;
        case 'artists':
            data = await Artists.findById(id);
            return data;
            break;
        case 'genre':
            data = await Genres.findById(id);
            return data;
            break;
        default:
            return data;
    }
}

// Update Operations
async function update(type, id, object) {
    let data = Promise.resolve(false);
    switch (type) {
        case 'artworks':
            data = await ArtWorks.findByIdAndUpdate(id, object, {new: true, upsert: true});
            return data;
            break;
        case 'artists':
            data = await Artists.findByIdAndUpdate(id, object, {new: true, upsert: true});
            return data;
            break;
        case 'genres':
            data = await Genres.findByIdAndUpdate(id, object, {new: true, upsert: true});
            return data;
            break;
        default:
            return data;
    }
}

// Delete Operations
async function deleter(type, id) {
    let data = Promise.resolve(false);
    switch (type) {
        case 'artworks':
            data = await ArtWorks.findByIdAndDelete(id);
            return data;
        case 'artists':
            data = await Artists.findByIdAndDelete(id);
            return data;
        case 'genres':
            data = await Genres.findByIdAndDelete(id);
            return data;
        default:
            return data;
    }
}

module.exports = {
   all,
   create,
   read,
   update,
   deleter
}
