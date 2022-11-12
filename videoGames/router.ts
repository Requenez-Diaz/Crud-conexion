import { Router, Request, NextFunction, Response } from "express";
import { requireAuth } from "../auth/middlewares";
import  controller from './controller';

const router = Router();

router.get('/', requireAuth, async (req: Request, res: Response, next:NextFunction ) => {
    const toy = await controller.list();
    res.json(toy);
});


router.get('/:id', requireAuth, async (req: Request, res:Response, next:NextFunction)=>{
    try {
        const { id } = req.params;
        const model = await controller.getOne(id);
        res.json(model);
        
    } catch (error: any) {
        console.log(" ups ~ file:router.ts ~ line 38 ~ router.get ~ error", error )

        res.json({
            message: error.message
        })   
    }
})
router.post('/', requireAuth, async (req:Request, res: Response, next: NextFunction)=>{
    try {
         const toy  = await controller.store(req.body);
         res.status(201).json(toy)  
    } catch (error) {
        res.json({
            message:error
        });
    }
})

router.delete('/:id', requireAuth, async (req:Request, res:Response, next:NextFunction)=>{
    const { id } = req.params;
    try {
        await  controller.delete(id);
        res.status(204).json({
            console
        });
        
    } catch (error: any) {
        if (error.name === 'GameException'){
            return res.status(400).json({
                message: error.message
            })
        }
    }
})
router.patch('/:id', requireAuth, async (req: Request, res:Response, next: NextFunction)=>{
    try {
        const model = await controller.update(req.params.id, req.body );
        res.status(200).json(model);
        
    } catch (error:  any) {
        console.log('~ file> rputer.ts ~ line18 ~ router', error)

        if(error.message === 'Game not found'){
            return res.status(404).json({
                message: error.message
            });
        }
    }
});






export default router;