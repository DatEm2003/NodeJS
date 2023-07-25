const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);


const Course = new Schema({
    name: {type: String,require: true,},
    description: {type: String, require: true,},
    image: {type: String,require: true,},
    slug: { type: String, slug: "name", unique: true, },
    videoid: {type: String,require: true,},
},{
    timestamps: true,
});

module.exports = mongoose.model('courses', Course);