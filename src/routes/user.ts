import express from 'express';
import controllers from '../controllers';
import Auth, { validateRequest } from '../middlewares/auth';
import { userValidators } from '../validators/validate';
import validators from '../validators';
const router = express.Router();

router.post('/register',validateRequest(validators.userValidators.register),controllers.User.create);
router.post('/login',validateRequest(validators.userValidators.Login),controllers.User.login);
router.get('/',validateRequest(validators.userValidators.getUserDetails),Auth.authenticate, controllers.User.UserDetails);

export default router;
