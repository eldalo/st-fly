import axios from 'axios';
import { toast } from 'sonner';

const NX_COINGECKO_API = process.env.NX_COINGECKO_API;
const NX_COINGECKO_CURRENCY = process.env.NX_COINGECKO_CURRENCY;

export const fetchCoinData = async () => {
  try {
    const response = await axios.get(NX_COINGECKO_API as string, {
      params: {
        vs_currency: NX_COINGECKO_CURRENCY,
        order: 'market_cap_desc',
        per_page: 10,
        page: 1,
        sparkline: false,
      },
    });
    return response.data;
  } catch (error) {
    toast.error(`Error from CoinAPI: ${error}`);
    throw error;
  }
};
