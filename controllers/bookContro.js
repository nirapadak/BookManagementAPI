const { Book } = require('../models/bookSchema');


//create a new Book----------------------
exports.createBook = async (req, res) => {
  try {
    const { title, author, description, publishedYear } = req.body;
    const book = await new Book({ title, author, description, publishedYear }).save();
    res.status(200).json({
      Data: book,
      "msg": 'book saved successfully'
    })
    
    
  } catch (error) {
    res.status(404).json({
     "msg": `this is a ${error.message}`
   }) 
  }
}
// found all books----------------------
exports.findBook = async (req, res) => {
  try {
    const allBooks = await Book.find();
    res.status(200).json(allBooks);
  } catch (error) {
    res.status(404).json({
      "msg": "book found error",
      "error": error
    })
  }
}
//retrieve a book ----------------------
exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updateBook = await Book.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: {
          title: res.body.title,
          author: res.body.author,
          description: res.body.description,
          publishedYear: res.body.publishedYear
        }
      },
      {
        new: true
      }
    )
    res.status(200).json({
      "msg": "Updated successfully",
      data:updateBook
    })
  } catch (error) {
    res.status(404).json({
      "msg": "Error updating book",
      "error": error.message
    })
  }
}
