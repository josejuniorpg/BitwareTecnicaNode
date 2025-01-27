import mongoose, {Document, Schema} from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
    age: number;
}

const userSchema = new Schema<IUser>({
    name: {type: String, required: true},
    email: {type: String, required: true},
    age: {type: Number, required: true},
});

const User = mongoose.model<IUser>('User', userSchema);
export default User;
