const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Azure uses process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World! This app is running on Azure App Service.');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
