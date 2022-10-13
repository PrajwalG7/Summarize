import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(req, res) {
  if (req.query.API_ROUTE_SECRET !== process.env.API_ROUTE_SECRET) {
    return res.status(401).json(JSON.stringify("unauthorized"));
  }
  // switch the methods
  switch (req.method) {
    case "PUT": {
      return insertBook(req, res);
    }
  }
}

async function insertBook(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    let bookTitle = req.body.data.bookTitle;
    let bookAuthor = req.body.data.bookAuthor;
    let keypoint1 = req.body.data.keypoint1;
    let keypoint2 = req.body.data.keypoint2;
    let keypoint3 = req.body.data.keypoint3;
    let keypoint4 = req.body.data.keypoint4;
    let keypoint5 = req.body.data.keypoint5;
    let keypoint6 = req.body.data.keypoint6;
    let keypoint7 = req.body.data.keypoint7;
    let keypoint8 = req.body.data.keypoint8;
    let keypoint9 = req.body.data.keypoint9;
    let keypoint10 = req.body.data.keypoint10;
    let description1 = req.body.data.description1;
    let description2 = req.body.data.description2;
    let description3 = req.body.data.description3;
    let description4 = req.body.data.description4;
    let description5 = req.body.data.description5;
    let description6 = req.body.data.description6;
    let description7 = req.body.data.description7;
    let description8 = req.body.data.description8;
    let description9 = req.body.data.description9;
    let description10 = req.body.data.description10;

    let bookInserted = await db.collection("books-collection").insertOne({
      book: bookTitle,
      author: bookAuthor,
    });

    let summaryInserted = await db.collection("summary-collection").insertOne({
      author: bookAuthor,
      keypoints: [
        {
          id: "1",
          keypoint: keypoint1,
          summary: description1,
        },
        {
          id: "2",
          keypoint: keypoint2,
          summary: description2,
        },
        {
          id: "3",
          keypoint: keypoint3,
          summary: description3,
        },
        {
          id: "4",
          keypoint: keypoint4,
          summary: description4,
        },
        {
          id: "5",
          keypoint: keypoint5,
          summary: description5,
        },
        {
          id: "6",
          keypoint: keypoint6,
          summary: description6,
        },
        {
          id: "7",
          keypoint: keypoint7,
          summary: description7,
        },
        {
          id: "8",
          keypoint: keypoint8,
          summary: description8,
        },
        {
          id: "9",
          keypoint: keypoint9,
          summary: description9,
        },
        {
          id: "10",
          keypoint: keypoint10,
          summary: description10,
        },
      ],
      title: bookTitle,
    });

    return res.json({
      message: "Book Inserted Successfully!",
      success: true,
    });
  } catch (error) {
    // return the error
    return res.json({
      message: "Some error occured!",
      success: false,
    });
  }
}
