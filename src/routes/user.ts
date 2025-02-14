import express from 'express';
import controllers from '../controllers';
import Auth, { validateRequest } from '../middlewares/auth';
import { userValidators } from '../validators/validate';
import validators from '../validators';
const router = express.Router();

router.post('/register',validateRequest(validators.userValidators.register),controllers.User.create);
router.post('/login',validateRequest(validators.userValidators.Login),controllers.User.login);
router.get('/',Auth.authenticate, controllers.User.UserDetails);

export default router;
