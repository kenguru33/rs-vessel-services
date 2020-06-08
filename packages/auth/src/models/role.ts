import { Schema, Document, model } from 'mongoose'

interface RoleDoc extends Document {
    name: string
    description: string
}

interface RoleAttributes {
    name: string
    description?: string
}

const roleSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    }
})

const RoleModel = model<RoleDoc>('Role', roleSchema)

const Role = {
    create: (attributes: RoleAttributes) => {
        return new RoleModel(attributes)
    }
}

export { Role, RoleDoc }