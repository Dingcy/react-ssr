import  express from 'express';
import { render } from './util';

const app = express();
app.use(express.static('public'));//静态资源文件去public下去找


app.get('*',function (req,res) {
    res.send(render(req));
})

var server = app.listen(3000);