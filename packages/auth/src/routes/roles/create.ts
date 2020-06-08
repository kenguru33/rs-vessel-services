import { Router, Request, Response } from 'express'
import { Role } from '../../models/role';

const router = Router();

router.post('/api/roles/create', async (req: Request, res: Response) => {
    const stationAdmin = Role.create({ name: 'station-admin' })
    const vesselAdmin = Role.create({ name: 'vessel-admin' })
    await stationAdmin.save()
    res.send({ stationAdmin })

})

export { router as createRoleRouter }

