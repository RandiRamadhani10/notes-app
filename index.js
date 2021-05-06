const express = require('express');
const routerAdd = require('./routes/add');
const routerDelete = require('./routes/delete');
const routerEdit = require('./routes/update');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set('view engine', 'ejs');


app.use('/', routerAdd);
app.use('/Delete', routerDelete);
app.use('/edit', routerEdit);

app.listen(PORT, () => {
    console.log(`server berjalan di http://localhost:${PORT}`);
});