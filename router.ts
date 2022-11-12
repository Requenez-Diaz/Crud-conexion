import { Express } from 'express';
import authRouter from './auth/router';
import productRouter from './products/router';
import categoriesRouter from './categories/router';
import recipesRouter from './recipes/router';
import menuRouter from './menu/router';
import GameRouter from './videoGames/router';
import veterinariaRouter from './veterinaria/router';

const router = (app: Express) => {
    app.use("/auth", authRouter);
    app.use("/products", productRouter);
    app.use("/categories", categoriesRouter);
    app.use("/recipes", recipesRouter);
    app.use("/menu", menuRouter);
    app.use("/games", GameRouter);
    app.use("/veterinaria", veterinariaRouter);
}

export default router;