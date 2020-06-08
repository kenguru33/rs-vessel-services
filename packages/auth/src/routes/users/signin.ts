import { Router, Request, Response } from 'express'
import { User } from '../../models/user';
import { Role } from '../../models/role';

const router = Router();

router.post('/api/users/signin', async (req: Request, res: Response) => {
    const user = User.create({ email: 'bernt@rs.no', password: 'asdf' })
    const role = Role.create({
        name: 'admin'
    })
    res.status(200).send({ user, role })
})

export { router as signinRouter }

