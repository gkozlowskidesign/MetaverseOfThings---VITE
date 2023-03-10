import useAxios from "../Hooks/useAxios"
import CoinTrending from "./CoinTrending";
import Skeleton from "./Skeleton";

const Trending = () => {
  const { response, loading } = useAxios('search/trending');

  if(loading) {
    return (
      <div className="wrapper-container mt-8">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
      </div>
    )
  }

  return (

    <section className="p-8 bg-gray-900 rounded-xl ring-2 ring-gray-600">
    <div>
      <p className="text-purple-500 pb-10">Total 7 Recognized Tokens</p>
    </div>
    <h1 className="text-3xl mb-2 text-gray-600">Trending</h1>
    {response && response.coins.map(coin => <CoinTrending key={coin.item.coin_id} coin={coin.item} />)}
  </section>

  
  )
}



export default Trending
