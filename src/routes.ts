import { Router } from 'express';
import { AsnwerController } from './controllers/AnswerController';
import { NpsController } from './controllers/NpsController';
import { SendMailController } from './controllers/SenMailController';
import { SurveysController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController';

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();
const sendMailController = new SendMailController();
const asnwerController = new AsnwerController();
const npsController = new NpsController();

router.post("/users", userController.create);
router.post("/surveys", surveysController.create);
router.get("/all", surveysController.show);
router.post("/sendMail", sendMailController.execute);
router.get("/answers/:value", asnwerController.execute);
router.get("/nps/:survey_id", npsController.execute);

export { router };