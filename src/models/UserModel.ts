import { model, Schema } from 'mongoose';

const UserModelSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    senha: {
        type: String,
        required: true,
    }
});

export default model("users", UserModelSchema);