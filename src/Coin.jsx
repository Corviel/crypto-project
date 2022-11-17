const Coin = ({ rank, imgSrc, name, symbol, mktChange24, currentPrice, marketCap }) => {
   const isPositiveColor = mktChange24 > 0 ? 'lightgreen' : 'red'
   return ( 
      <>
         <tr className='coin'>
            <td className='coin-rank'>{rank}.</td>
            <td className='coin-id'>
               <img src={imgSrc} alt="" width={20} height={20}/>
               <h2>{name}</h2>
               <span>{symbol}</span>
            </td>
            <td style={{color: isPositiveColor}}>{Number(mktChange24).toFixed(2)}%</td>
            <td>${currentPrice.toLocaleString('en-Us')}</td>
            <td>${marketCap.toLocaleString('en-Us')}</td>
         </tr>
      </>
   );
}
 
export default Coin;