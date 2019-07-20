# React Google Books Search
The users can search books through Google Books API. They can also save the books that they are interested in.

### Folder Structure
```
.
├── client
│   ├── node_modules
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   ├── BookDetail
│   │   │   ├── DeleteBtn
│   │   │   ├── Nav
│   │   │   ├── SavedBookDetail
│   │   │   └── SearchForm
│   │   ├── pages
│   │   │   ├── Book.js
│   │   │   ├── NoMatch.js
│   │   │   └── SavedBooks.js
│   │   ├── utils
│   │   │   └── API.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── controllers
│   └── booksController.js
│
├── models
│   ├── book.js
│   └── index.js
│
├── node_modules
│
├── routes
│   ├── api
│   |   ├── book.js
│   |   └── index.js
│   └── index.js
│
├── package.json
│
└── server.js

```

### Required Node API/Packages
  * axios
  * body-parser
  * cheerio
  * express
  * express-handlebars
  * moment
  * mongojs
  * mongoose
  * morgan
  * request
  * bootstrap
  * react-bootstrap
