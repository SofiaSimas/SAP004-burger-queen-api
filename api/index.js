import express from 'express'
import bodyParser from 'body-parser'
import OrderRoutes from './server/routes/OrderRoutes';
import ProductsRoutes from './server/routes/ProductsRoutes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.use('/api/orders', OrderRoutes);
app.use('/api/products', ProductsRoutes);

// quando recebe uma rota não listada
app.get('*', (req, res) => res.status(200).send({
   message: 'Boas-vindas à API do Burger Queen!',
}));

app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`);
});

module.exports = app