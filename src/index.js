import Hapi from "hapi";

import database from "./config/database";
import accountRoute from "./routes/accountRoute";
import ordersRoute from "./routes/ordersRoute";
import infoRoute from "./routes/infoRoute";
import pricesRoute from "./routes/pricesRoute";
import newOrderRoute from "./routes/newOrderRoute";

const port = 3000;
const server = Hapi.server({
  host: "localhost",
  port,
  routes: {
    json: {
      space: 4
    }
  }
});

accountRoute(server);
ordersRoute(server);
infoRoute(server);
pricesRoute(server);
newOrderRoute(server);

server.route({
  method: "GET",
  path: "/",
  handler: () => "Hello World from Hapi!"
});

database.connect().then(async () => {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log("Server running at:", server.info.uri);
});
