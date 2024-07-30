
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const roleSchema = new Schema({
//     name: {
//         type: String,
//         required: true
//     },
   
// });
// module.exports = mongoose.model('Role', roleSchema);


// app/models/roleModel.js
const mongoose = require('mongoose');
const { Schema } = mongoose;
const slugify = require('slugify');

const roleSchema = new Schema({
  name: { type: String, required: true, unique: true },
  slug: { type: String, unique: true },
//   permissions: [{ type: String }]
});

// Middleware to generate slug before saving
roleSchema.pre('save', function(next) {
  if (this.isModified('name')) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }
  next();
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;
