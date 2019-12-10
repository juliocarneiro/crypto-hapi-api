import InfoController from "../controllers/info";

const infoController = new InfoController();

const infoRoute = server => {
  server.route({
    method: "GET",
    path: "/info",
    handler: (request, h) => infoController.getAll(request, h)
  });
};

module.exports = infoRoute;
