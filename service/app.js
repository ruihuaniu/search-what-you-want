const Koa = require('koa')
const Router = require('@koa/router')
const bodyParser = require('koa-bodyparser')
//const json = require('koa-json')
//const cors = require('@koa/cors')


const app = new Koa()
const router = new Router()
//app.use(json())
//app.use(cors())
app.use(bodyParser())



const products = [
    { catalog_number: 1, name: "Product1", image: "https://picsum.photos/id/119/300/200", category: "category1", price: 9.99, unit: "USD" },
    { catalog_number: 2, name: "Product2", image: "https://picsum.photos/id/119/300/200", category: "category2", price: 19.99, unit: "USD" },
    { catalog_number: 3, name: "Product3", image: "https://picsum.photos/id/119/300/200", category: "category3", price: 29.99, unit: "USD" },
    { catalog_number: 4, name: "Product4", image: "https://picsum.photos/id/119/300/200", category: "category1", price: 39.99, unit: "USD" },
    { catalog_number: 5, name: "Product5-1", image: "https://picsum.photos/id/119/300/200", category: "category2", price: 49.99, unit: "USD" },
    { catalog_number: 6, name: "Product5-2", image: "https://picsum.photos/id/119/300/200", category: "category3", price: 59.99, unit: "USD" }
]

// RESTFul API below
router.prefix('/api/v1')
router.get('/products', async (ctx) => {
    ctx.body = products;
})


router.post('/', async (ctx) => {
    const password = ctx.request.body.password;
    console.log(password, typeof (password));
    try {
        if (password === "2020") {
            ctx.body = {
                "code": 200,
                "message": "OK, succeed"
            }
        }
        else {
            ctx.body = {
                "code": 401,
                "message": "401 Unauthorized",
                "description": "More details about the error here"
            }
        }
    } catch (err) {
        //ctx.body = ctx.response.status(500).json({ message: err.message })
        //ctx.response.status = 500;

        // err.status = err.statusCode || err.status || 500;
        // ctx.body = err.message;
        // ctx.app.emit('error', err, ctx);

    }

})


app.use(router.routes()).use(router.allowedMethods())

app.listen(3050, () => {
    console.log("Node server is starting at port 3050");

})