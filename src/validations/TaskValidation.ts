const {check} = require('express-validator');

const title = check('title').notEmpty()
    .withMessage('The field title is required.')
    .isString()
    .withMessage('The field title must be a string.')
    .isLength({
      min: 3,
      max: 255,
    })
    .withMessage('The field title must have between 3 and 255 characters.')
    .trim();

const description = check('description').trim();

const isFavorited = check('favorited');

const validate = [
  title,
  description,
  isFavorited,
];

export default { validate };