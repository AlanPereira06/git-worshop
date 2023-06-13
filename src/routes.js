import { Router } from "express";
import { getMessage } from './controllers/messages-controller.js';
import { getBienvenida } from "./controllers/bienvenida-controller.js";
import { getError } from "./controllers/error-controller.js";
import { getInclude } from "./controllers/includes-controller.js";

const router = Router();

router.get('/', getBienvenida)

router.get('/messages/:message', getMessage)

router.get('/error', getError)

router.get('/include/:texto/:cadena', getInclude)

export { router };