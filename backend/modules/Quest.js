const mongoose =require('mongoose')
const {Schema} =mongoose;

const QuestSchema = new Schema({
    user:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    contestId:{
        type :String
    },
    index:{
        type :String
    },
    name:{
        type :String
    },
    rating:{
        type :String
    },
    tags:[
        {
            type : String
        }
    ]
});

module.exports = mongoose.model('quest',QuestSchema)