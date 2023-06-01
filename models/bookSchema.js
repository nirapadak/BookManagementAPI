const mongoose = require('mongoose');
// import { Schema } from 'mongoose';
// import { Trim } from 'mongoose/types/expressions';
const { Schema } = mongoose; 

const BookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      Trim: true,
    },
    author: {
      type: String,
      Trim: true,
      required: true
    },
    description: {
      type: String,
      Trim: true
    },
    publishedYear: {
      type: Number,
      Trim: true
    }
}, {
  timestamps: true,
  versionKey: false
})

const Book = mongoose.model('Book', BookSchema)
module.exports ={Book};