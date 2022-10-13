import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(req, res) {
  if (req.query.API_ROUTE_SECRET !== process.env.API_ROUTE_SECRET) {
    return res.status(401).json(JSON.stringify("unauthorized"));
  }
  // switch the methods
  switch (req.method) {
    case "GET": {
      return getBooks(req, res);
    }
    case "POST": {
      return getSummary(req, res);
    }
    case "PUT": {
      if (req.body.book) {
        return insertBook(req, res);
      } else {
        return insertSummary(req, res);
      }
    }
  }
}

async function getBooks(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();

    let posts = await db.collection("books-collection").find({}).toArray();

    return res.json({
      message: JSON.parse(JSON.stringify(posts)),
      success: true,
    });
  } catch (error) {
    // return the error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

async function getSummary(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    let bookTitle = req.body.summary;

    let posts = await db
      .collection("summary-collection")
      .find({
        title: bookTitle,
        "keypoints.keypoint": { $exists: true },
      })
      .toArray();

    return res.json({
      message: JSON.parse(JSON.stringify(posts)),
      success: true,
    });
  } catch (error) {
    // return the error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

async function insertBook(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    let book = req.body.book;
    let author = req.body.author;

    let posts = await db.collection("books-collection").insertOne({
      book: book,
      author: author,
    });

    return res.json({
      success: true,
    });
  } catch (error) {
    // return the error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

async function insertSummary(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    let title = req.body.title;
    let author = req.body.author;
    // let keypoints = req.body.keypoints;
    // let summary = req.body.summary;

    let posts = await db.collection("summary-collection").insertOne({
      author: author,
      keypoints: [
        {
          id: "1",
          keypoint: req.body.keypoints[0].keypoint,
          summary: req.body.keypoints[0].summary,
        },
        {
          id: "2",
          keypoint: req.body.keypoints[1].keypoint,
          summary: req.body.keypoints[1].summary,
        },
        {
          id: "3",
          keypoint: req.body.keypoints[2].keypoint,
          summary: req.body.keypoints[2].summary,
        },
        {
          id: "4",
          keypoint: req.body.keypoints[3].keypoint,
          summary: req.body.keypoints[3].summary,
        },
        {
          id: "5",
          keypoint: req.body.keypoints[4].keypoint,
          summary: req.body.keypoints[4].summary,
        },
        {
          id: "6",
          keypoint: req.body.keypoints[5].keypoint,
          summary: req.body.keypoints[5].summary,
        },
        {
          id: "7",
          keypoint: req.body.keypoints[6].keypoint,
          summary: req.body.keypoints[6].summary,
        },
        {
          id: "8",
          keypoint: req.body.keypoints[7].keypoint,
          summary: req.body.keypoints[7].summary,
        },
        {
          id: "9",
          keypoint: req.body.keypoints[8].keypoint,
          summary: req.body.keypoints[8].summary,
        },
        {
          id: "10",
          keypoint: req.body.keypoints[9].keypoint,
          summary: req.body.keypoints[9].summary,
        },
      ],
      title: title,
    });

    return res.json({
      message: "Summary Inserted Successfully",
      success: true,
    });
  } catch (error) {
    // return the error
    return res.json({
      message: "Some error occured",
      success: false,
    });
  }
}
