import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { NasaController } from "./controllers/NasaController.js";
import { SandboxController } from "./controllers/SandboxController.js";

export const router = [
  {
    path: '',
    controller: [HomeController, NasaController, SandboxController]
  }
]