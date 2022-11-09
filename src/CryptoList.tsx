import { useQuery } from '@tanstack/react-query'

function CryptoList() {
  const getCrypto = () => {
    const res = fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=24h').then(res => res.json())
    return res
  }
  const {data, isLoading, error} = useQuery(['coins'], getCrypto, {refetchInterval: 5000})
  
  if (isLoading) { return <p>Loading...</p> }
  if (error) { return <p>Fetching error...</p> }


  return (
    <table className='crypto-list'>
      <thead>
        <tr>
          <th colSpan={2}>Crypto Currencies</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: any, key: number) => {
          const currentPrice = item.current_price
          return (
            <tr className='coin'>
              <td className='coin-rank'>{item.market_cap_rank}.</td>
              <td className='coin-id'>
                <img src={item.image} alt="" width={20} height={20}/>
                <h2>{item.name}</h2>
                <span>{item.symbol}</span>
              </td>
              <td>${currentPrice.toLocaleString('en-Us')}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default CryptoList;
