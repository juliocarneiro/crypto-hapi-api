import Boom from "boom";
import api from "binance";

class PricesController {
  constructor(Prices) {
    this.Prices = Prices;
  }

  async getAll(request, h) {
    try {
      const binanceRest = new api.BinanceRest({
        disableBeautification: false,
        handleDrift: true
      });
      const prices = await binanceRest.allPrices();
      const pricesData = prices.length
        ? { prices }
        : { message: "Nenhum preço cadastrado!" };
      return pricesData;
    } catch (error) {
      return Boom.badRequest("Falha ao buscar preços.");
    }
  }
}

export default PricesController;
