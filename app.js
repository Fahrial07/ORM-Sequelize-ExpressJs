const express = require('express');
const routes = require('./routes/index.route');
const app =  express();
const PORT = process.env.PORT || 3000;

//set view engine ejs
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
