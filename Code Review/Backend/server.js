//using dotenv file api key
require('dotenv').config()

const app=require('./src/app');
const port=3000;



//to start the server
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});