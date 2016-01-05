var koa = require('koa'),
	serve = require('koa-static'),
	app = koa();

app.use(serve('.'));

app.listen(80);