const mongoose = require('mongoose')

mongoose.connect(
  "mongodb + srv://shivanibarman247_db_user:n:BRu6-WPkkK_3t@mongoo.usuzkny.mongodb.net/?appName=mongoo",
).then((res) => {
    console.log("Database connected successfully!!")
}).catch((err) => {
    console.log("Something went wrong",err)
})




// mongodb + srv://shivanibarman247_db_user:<db_password>@mongoo.usuzkny.mongodb.net/?appName=mongoo
// n:BRu6-WPkkK_3t
// shivanibarman247_db_user

