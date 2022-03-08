const model = require('../models/User');
const { Sequelize } = require('sequelize');
const fs = require('fs');

exports.createPost = (req, res, next) => {
    console.log(req)
    
    let urlImg
    if(req.file){
        urlImg = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
    }
    else
    {
        urlImg=""
    }
    model.Post.create({
      text: req.body.text,
      userId : req.body.userId,
      imageUrl: urlImg,
      liked: 0
    })
    .then(() => res.status(201).json({ message: 'Post créé !' }))
    .catch(error => res.status(400).json({ error }));
}

exports.getAllPosts = (req, res, next) => {

    model.Post.findAll({
      attributes: [
        'id','text', 'imageUrl', 'userId', 'liked',
        [Sequelize.fn('date_format', Sequelize.col('created_at'), 'le %d/%m/%Y à %H:%i:%s'), 'createdAt']
      ],
  
      include:[
        {model: model.User, as: 'author'}
      ],
      order: [['createdAt', 'DESC']]
    })
       .then(post => res.status(200).json(post))
       .catch(error => res.status(400).json({ error }));
};

exports.deletePost = (req, res, next) => {
 
  model.Post.findOne({
    where:{
      id: req.params.id
    }})

    .then(file => {
      console.log(file)
      const filename = file.imageUrl.split('/images/')[1];
      console.log(filename)
      fs.unlink(`images/${filename}`, () => {
        
      model.Post.destroy({
        where:{
          id: req.params.id
        }  
      })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
};

exports.likePost = (req, res, next) => {
  
  
  if (req.body.like == 1) {
     like = 'liked + 1'
  }
  else {
     like = 'liked - 1'
  }
  model.Post.update({liked: Sequelize.literal(like) },{
    where:{
      id: req.params.id, 
    }
  })
  .then(() => res.status(200).json({ message: 'Like modifié !'}))
  .catch(error => res.status(400).json({ error }));
};

exports.createComment = (req, res, next) => {

  model.Comment.create({
    content: req.body.content,
    userId: req.body.userId,
    postId: req.body.postId
  })
  .then(() => res.status(201).json({ message: 'Commentaire envoyé' }))
  .catch(error => res.status(400).json({ error }));
};

exports.getComments= (req, res, next)=> {

  model.Comment.findAll({
    where:{
      postId: req.params.id
    },
    attributes: [
      'id','content', 'postId', 'userId', 
      [Sequelize.fn('date_format', Sequelize.col('created_at'), 'le %d/%m/%Y à %H:%i:%s'), 'createdAt']
    ],
    include:[
      {model: model.User, as: 'author'}
    ],
    order: [['createdAt', 'DESC']]
  })
  .then(post => res.status(200).json(post))
  .catch(error => res.status(400).json({ error }));
};