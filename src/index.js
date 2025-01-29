import app from "./routes/app.js";
import { PORT } from "./config.js";

//Activador del puerto en localhost
app.listen(PORT);
console.log("Actividad 1 por Andrea Muchacho", PORT);
