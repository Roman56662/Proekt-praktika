# Mongoose

полезные ссылки:
1. Документация
https://mongoosejs.com/docs/guide.html
2. Хороший гайд
https://developer.mozilla.org/ru/docs/Learn/Server-side/Express_Nodejs/mongoose#related_documents

## Инициализация
```
const mongoose = require('mongoose')

// mongoose connection
mongoose.connect('link', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

// base connection
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('base connected')
})
```
---
## Создание схемы и модели 

лучше создать в отдельном файле

```
const { Schema, model } = require('mongoose')

const schema = new Schema({
  title:   { type: String, required: true, unique: true },
  popular: { type: Boolean, required: true },
  flag:    { type: String, required: true }
})

module.exports = model('Country', schema)
```

можно в текущем

```
const testSchema = new mongoose.Schema({
  title: String,
  price: Number,
  popular: Boolean
})

const Test = mongoose.model('Test', testSchema)
```
---
## Создание и изменение документов


создание

```
const someDoc = new Test({
  title: 'Russia',
  price: 30000,
  popular: true
})

someDoc.save(function (err) {
  if (err) return handleError(err)
})

```

изменение 

```
//найти необходимый документ
Test.findOne({ title: 'Russia' }, function (err, story) {
  if (err) return handleError(err)
  //заменить данные
  story.title = 'Ukrain'
  story.title.save(function (err) {
    if (err) return handleError(err); // сохранили!
    })
  console.log(story)
})
```