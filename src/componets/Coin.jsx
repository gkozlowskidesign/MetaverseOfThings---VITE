import { currencyFormat } from "./utils";
import { TrendingDown, TrendingUp } from "../Icons/Icons";
import { Link } from "react-router-dom";


const Coin = ({ coin }) => {
    console.log(coin);
  return (
    <Link to={`/coin/${coin.id}`}>
    <div className="grid grid-col-3 sm:grid-cols-4 font-light p-4 rounded-xl ring-2 ring-gray-900 hover:bg-indigo-600 bg-black">
        <div className="flex items-center gap-4 w-full"> 
            <img className="w-6" src={coin.image} alt={coin.name}></img>
            <p className="text-white">{coin.name}</p>
            <span className="text-xs text-white">({coin.symbol})</span>
        </div>
        
        <span className="w-full text-center p-4 text-white">{currencyFormat(coin.current_price)}</span>
        <span className={`flex gap-1 p-4 ${coin.price_change_percentage_24h < 0 ? 'text-red-400' : 'text-green-400'}`}>
            {coin.price_change_percentage_24h < 0 ? <TrendingDown /> : <TrendingUp />}
          {coin.price_change_percentage_24h}
        </span>
        <div className="hidden sm:block">
          <p className="font-semibold text-white">Market Cap</p>
          <span className="text-white">{currencyFormat(coin.market_cap)}</span>
        </div>
    </div>
    </Link>
  
  )
}

export default Coin
