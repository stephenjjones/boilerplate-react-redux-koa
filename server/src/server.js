require("babel-polyfill");

import koa from 'koa';

const app = koa();

app.use(function *(){
  this.body = "hello from koa";
});

const server = app.listen(3003, function() {
  console.log('Koa is listening to http://localhost:3003');
});
