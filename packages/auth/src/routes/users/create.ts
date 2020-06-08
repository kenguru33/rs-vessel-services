import { Router, Request, Response } from 'express'
import { User } from '../../models/user';
import { Role } from '../../models/role';
import { body, validationResult } from 'express-validator';
import { passwordComplexityValidator } from '../../utils/password-complexity-validator';

const router = Router();

router.post('/api/users/create', async (req: Request, res: Response) => {
    res.send({})
})

export { router as createUserRouter }

