import { useQuery } from '@tanstack/react-query'
import Coin from './Coin'

function CryptoList() {
  const getCrypto = () => {
    const res = fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=24h').then(res => res.json())
    return res
  }
  const {data, isLoading, error} = useQuery(['coins'], getCrypto, {refetchInterval: 5000})
  
  if (isLoading) { return <p>Loading...</p> }
  if (error) { return <p>Fetching error...</p> }


  return (
    <>
      <h1>Crypto Project made by Corviel</h1>
      <table className='crypto-list'>
        <thead>
          <tr>
            <th>#</th>
            <th>Identification</th>
            <th>24h</th>
            <th>Price</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, key: number) => {
            return (
              <Coin 
                rank={item.market_cap_rank} 
                imgSrc={item.image}
                name={item.name}
                symbol={item.symbol}
                mktChange24={item.market_cap_change_percentage_24h}
                currentPrice={item.current_price}
                marketCap={item.market_cap}
                
                key={key}
              />
            )
          })}
        </tbody>
      </table>
    </>
  );
}

export default CryptoList;
