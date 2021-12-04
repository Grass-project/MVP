const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost/fetcher', {useNewUrlParser: true,
useUnifiedTopology: true});

const {Schema} = mongoose;

const rsvpSchema = new Schema({
  name: String,
  email: String,
  date: String,
  idea: String,
});

const rsvp = mongoose.model('rsvp', rsvpSchema);

const save = (input) => {

  let newRsvp = new rsvp ({
    name: input.name,
    email: input.email,
    date: input.date,
    idea: input.idea
  })
  .save((err, data) => {
    if (err) {
      console.log('save err', err);
    } else {
      console.log('save ok')
    }
  });

}

const read = () => {
  return rsvp.find()
  .sort({_id: -1})
  .exec();
}

const remove = (id) => {

  rsvp.findOneAndDelete({_id: id}, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      console.log('deleted')
    }
  })
}

module.exports = {
  save: save,
  read: read,
  remove: remove
}