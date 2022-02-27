const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const model = require('../models/User');


exports.signup = (req, res, next) => {
  console.log(req.body)
  bcrypt.hash(req.body.password, 10)
  .then(hash => {
    const user = new model.User({
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        email: req.body.email,
        password: hash,
});
      user.save()
            .then(() => {
                res.status(200).send({ message: 'Utilisateur créé !' })
            })
            .catch(error => {
                console.log(error);
                res.status(400).send({ error })
            })
          })
  .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  model.User.findOne({
      where:{
          email: req.body.email
      }  
  })
  .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, user.password)
          .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
              user: user,
              token: jwt.sign(
                { userId: user.id },
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '24h' }
              )
            })
          .catch(error => res.status(500).json({ error }));
  })
  .catch(error => res.status(500).json({ error }));
  })
};

exports.getOneUser = (req, res, next) => {
  model.User.findOne({
     where: { id : req.params.id }
  })
  .then(user => res.status(200).json(user))
  .catch(error => res.status(400).json({error}))
}

exports.updateLastName = (req,res,next) => {
  model.User.update({
      lastname: req.body.lastname,
  },
  {
      where:{
          id:req.params.id
      }
  })
  .then(user => res.status(200).json(user))
  .catch(error => res.status(400).json({error}))
}