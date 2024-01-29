const books = require("../models/data")


exports.getBookAll = (req, res) => {
    return res.json({
        status : "success",
        data : books
    })
}

exports.bookById = (req, res) => {
    const param = parseInt(req.params.id) 

    const book = books.filter(book => book.id === param)

    if(book.length !== 0) {
        return res.json({
            message : "Success", 
            data : book
        })
    }
    else {
        return res.json({
            message : "Failed"
        })
    }

}

exports.booksJenis = (req, res) => {
    const param = req.params.jenis

    const book = books.filter(book => book.type === param)

    if(book.length !== 0 ) {
        return res.json({
            message : "Success", 
            data : book
        })
    }
    else {
        return res.json({
            message : "Failed", 
        })
    }
 
}

exports.putBook = (req, res) => {
    const newName = req.body.name
    const param = parseInt(req.params.id)

    const book = books.find(book => book.id === param)

    if(book) { 
        book.name = newName
        return res.json({
            message : "Succes", 
            data : books
        })
    } 
    else {
        return res.json({
            message : "failed"
        })
    }

}

exports.createBook = (req, res ) => {
    const name = req.body.name
    const type = req.body.type

    const data = {
        id : books.length + 1, 
        name : name, 
        type : type
    }

    books.push(data)

    return res.json({
        message : "Success",
        data : books
    })
    
}

exports.delete = (req, res) => {
    const id = parseInt(req.params.id)

    const removeIndex = books.findIndex(book => book.id === id);

    if (removeIndex !== -1) {
    // Remove the item at the specified index
    books.splice(removeIndex, 1);
    }
    else {
        return res.json({
            message : "Failed",
        })
    }

    return res.json({
        message : "Success", 
        data : books
    })
}