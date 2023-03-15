const express = require("express");
const { engine } = require("express-handlebars");
const path = require('path')
const homeRoute = require('./routes/home')
const adminRoute = require('./routes/admin')
const adminHelpers = require('./helpers/admin/adminHelper')

const app = express();

//Handler bars & app settings 
app.engine(
  "hbs",
  engine({
    layoutsDir: "views/layouts",
    defaultLayout: "main-layout",
    extname: "hbs",
    helpers: {
      defaultOptionSelect: adminHelpers.defaultOptionSelect,
      radioNotChecked: adminHelpers.radioNotChecked
    }
  })
);

app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: false}))

//Midlewares

app.use(homeRoute)
app.use('/admin', adminRoute)


app.listen(4040)