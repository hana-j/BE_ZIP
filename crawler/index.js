const express = require('express');
const app = express();
const port = 5000;
const {sequelize} = require('./models');
const crawl = require('./routes/crawl')
//db 연결
sequelize
    .sync({force:false})
    .then(()=>{
        console.log('db Connected')
    })
    .catch((err)=>{
        console.log(err);
    });

    
app.use(express.json());
app.use('/crawl', crawl);

//error
app.use((req, res, next) => {
    res.sendStatus(404);
  });
  app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(500);
  });
    

app.listen(port, ()=>{
    console.log(`listening at http://localhost:${port}`);
})