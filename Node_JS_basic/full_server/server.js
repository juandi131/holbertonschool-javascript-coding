const express = require('express');
const indexRouter = require('./routes/index');
const app = express();

app.listen(1245);
app.use('/', indexRouter);
app.use('/students', indexRouter);
app.use('/students/:major', indexRouter);

export default app;
