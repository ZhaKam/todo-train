const { Schema: MongooseSchema, model, Types } = require('mongoose');

const userSchema = new MongooseSchema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    todos: [{ type: Types.ObjectId, ref: 'Todo' }]
});

module.exports = model('User', userSchema);