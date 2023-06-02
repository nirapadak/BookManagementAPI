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


// GET One book from the database -----------
exports.oneBookGet = async(req,res)=>{
    try {
       const {id} = req.params;
       const singleBook = await Book.findOne({_id:id});
        res.status(200).json(
            {
                success: true,
                message:"single book get done",
                Data:singleBook
            }
        );
    } catch (error) {
        res.status(404).json(
            {
                error:error.message
            }
        )
    }
};


// update a book -----------------
exports.singleBookUpdate = async(req,res)=>{
    try {
       const {id} = req.params;
       const singleBookUpdate = await Book.findByIdAndUpdate(
        {
            _id: id
        },
        {
            $set:{
                title:req.body.title,
                author:req.body.author,
                description:req.body.description,
                publishedYear:req.body.publishedYear
            }
        },
        {
            new: true
        }
       );
        res.status(200).json(
            {
                success: true,
                message:"single book update done",
                Data:singleBookUpdate
            }
        );
    } catch (error) {
        res.status(404).json(
            {
                error:error.message
            }
        )
    }
};


// delete a book from the database ----------
exports.singleBookDelete = async(req,res)=>{
    try {
       const {id} = req.params;
       const singleBookDelete = await Book.findByIdAndDelete({ _id: id });
        res.status(200).json(
            {
                success: true,
                message:"single book delete done",
                Data:singleBookDelete
            }
        );
    } catch (error) {
        res.status(404).json(
            {
                error:error.message
            }
        )
    }
};
