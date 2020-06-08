import { Schema, model, Document, Model } from 'mongoose'
import { RoleDoc, Role } from './role'
import passwordHash from 'password-hash'
import { passwordComplexityValidator } from '../utils/password-complexity-validator'

interface UserDoc extends Document {
    name?: string,
    email: string
    password: string,
    roles?: RoleDoc[]
}

interface UserAttribtes {
    name?: string,
    email: string
    password: string,
    roles?: RoleDoc[]
}

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    roles: {
        type: Array
    }
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id
            delete ret._id
            delete ret.password
        }
    }
})
userSchema.set('versionKey', 'version');
userSchema.pre('save', async function (done) {
    if (this.isModified('password')) {
        const hash = passwordHash.generate(this.get('password'))
        this.set('password', hash);
    }
    done();
});

const UserModel = model<UserDoc>('User', userSchema)


const User = {
    create: (attributes: UserAttribtes) => {
        return new UserModel(attributes)
    }
}

export { User }
