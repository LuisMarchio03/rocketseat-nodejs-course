import { Router } from "express";
import { AuthenticateClientController } from "../modules/account/useCases/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "../modules/account/useCases/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "../modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliverymanController } from "../modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();

const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();

routes.post("/v1/authenticate/client", authenticateClientController.handle);
routes.post(
  "/v1/authenticate/deliveryman",
  authenticateClientController.handle
);

routes.post("/v1/client", createClientController.handle);
routes.post("/v1/deliveryman", createDeliverymanController.handle);

export { routes };
