const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://shivanibarman247_db_user:nBRu6-WPkkK_3t@mongoo.usuzkny.mongodb.net/skillmatcher?retryWrites=true&w=majority",
  )
  .then(() => {
    console.log("Database connected successfully!!");
  })
  .catch((err) => {
    console.log("Something went wrong", err);
  });

  


