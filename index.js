const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./dist/public'));

app.get('/', (req, res) => {
    res.render('Home')
})

app.listen(3000, () => console.log('Server started')); 