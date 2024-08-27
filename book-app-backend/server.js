const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const PORT = 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
// db connection
mongoose
  .connect("mongodb://127.0.0.1:27017/mernstack_crud")
  .then(() => {
    console.log("db connection succesfully");
  })
  .catch((error) => {
    console.log(error);
  });

//user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    stock: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", userSchema);

// create user
app.post("/createbook", async (req, res) => {
  try {
    const bodyData = req.body;
    const book = new Book(bodyData);
    const bookData = await book.save();
    res.send(bookData);
  } catch (error) {
    res.send(error);
  }
});
// read all user

app.get("/readallbook", async (req, res) => {
  try {
    const bookData = await Book.find({});
    res.send(bookData);
  } catch (error) {
    res.send(error);
  }
});
app.get("/read/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById({ _id: id });
    res.send(book);
  } catch (error) {
    res.send(error);
  }
});

// update user

app.put("/updatebook/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.send(book);
  } catch (error) {
    res.send(error);
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findByIdAndDelete({ _id: id });
    res.send(book);
  } catch (error) {
    res.send(error);
  }
});

app.listen(PORT, () => {
  console.log(`server ise running on ...${PORT}`);
});
