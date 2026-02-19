const express = require("express");

const app = express();
const PORT = 4000;

app.use(express.json()); // ✅ ADD THIS LINE

require("./conn");

const UserRoutes = require("./Routes/user");

app.use("/api/user", UserRoutes);

app.listen(PORT, () => {
  console.log("backend is running on port", PORT);
});

// const express = require('express')

// const app = express()
// const PORT = 4000

// require('./conn')

// const UserRoutes = require('./Routes/user')

// app.use('/api/user',UserRoutes)

// app.listen(PORT, () => {
//     console.log("backend is running on port",PORT)
// })
