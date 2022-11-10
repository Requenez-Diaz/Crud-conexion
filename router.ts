import { Express } from 'express';
import authRouter from './auth/router';
import productRouter from './products/router';
import categoriesRouter from './categories/router';
import recipesRouter from './recipes/router';
import menuRouter from './menu/router'

const router = (app: Express) => {
    app.use("/auth", authRouter);
    app.use("/products", productRouter);
    app.use("/categories", categoriesRouter);
    app.use("/recipes", recipesRouter);
    app.use("/menu", menuRouter);
}

export default router;