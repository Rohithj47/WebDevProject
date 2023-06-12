import { Schema, model } from 'mongoose';

const schema = new Schema({
    username:{
        type: String,
        require: true,
        unique: true,
        min: 3
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        min: 6,
        require: true 
    },
    profilePicture: {
        type: String,
        default: ""
    },
    coverPicture: {
        type: String,
        default: ""
    },
    followers : {
        type: Array,
        default: []
    },
    following : {
        type: Array,
        default: []
    },
    role: {
        type: String,
        enum: ['admin', 'manager', 'user'],
        default: 'user',
    },
    desc: {
        type: String,
        max: 50
    },
    city: {
        type: String,
        max: 50
    },
    from: {
        type: String,
        max: 50
    },
    relationship: {
        type: Number,
        enum: [1,2,3]
    }

}, { timestamps: true });

const User = model('User', schema);
export default User 
