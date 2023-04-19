/** 
 * 
 * @lunaloid/sdk project
 * @author: miruchigawa
 * @lastest: 18 apr 2023
 * 
*/

/** ----------- Importing Modules OR Important Files ----------- **/
import express from "express";

import betaRoutes from "./routes/beta.js"
/** ----------- END -----------**/



/** ----------- Express Configuration ----------- **/
const app = express();
app.use(express.json());
/** ----------- END ----------- **/



/** ----------- Routing System ----------- **/
app.use("/beta/", betaRoutes)
//app.use("/auth/", authRoutes)
app.use((req, res) => {
  res.status(404).json({message: "What are you doing here"})
})
/** ----------- END ----------- **/



export default app;