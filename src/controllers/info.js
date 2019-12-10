import Boom from "boom";
import api from "binance";

class InfoController {
  constructor(Info) {
    this.Info = Info;
  }

  async getAll(request, h) {
    try {
      const binanceRest = new api.BinanceRest({
        disableBeautification: false,
        handleDrift: true
      });
      const info = await binanceRest.exchangeInfo();
      return info;
    } catch (error) {
      return Boom.badRequest("Falha ao buscar informaçoes.");
    }
  }
}

export default InfoController;
