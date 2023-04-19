/** ---------- Importing Modules OR Important Files **/
import { Router } from "express";

import chatControllers from "../controllers/chat.js";
import actionRecogControllers from "../controllers/actionRecog.js"
/** ---------- END ---------- **/



/** ---------- Express Configuration ---------- **/
const route = Router();
/** ---------- END ---------- **/



/** ---------- Routing System ---------- **/
route.get("/chat", chatControllers);
route.get("/actionrecog", actionRecogControllers)
/** ---------- END ---------- **/

export default route;