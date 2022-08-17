import { useEffect, useState } from "react";
import { Pair } from "constants/types";

const TokenPair = (tokenPairs: Array<Pair>) => {
const [pairs, setPairs] = useState([]);
  useEffect(() => {
    setPairs(tokenPairs)
  }, [tokenPairs]);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col" rowSpan={2}>TOKEN</th>
          <th scope="col" rowSpan={2}>PRICE</th>
          <th scope="col" colSpan={4}>
            PRICE CHANGE
          </th>
          <th scope="col" rowSpan={2}>LIQUIDITY</th>
          <th scope="col" rowSpan={2}>FDV</th>
        </tr>
        <tr>
          <th scope="col">5M</th>
          <th scope="col">1H</th>
          <th scope="col">6H</th>
          <th scope="col">24H</th>
        </tr>
      </thead>
      <tbody>
        {pairs.length > 0 && pairs.map(pair => (
            <tr>
                <td>{pair.dexId} - {pair.baseToken.symbol}/{pairs.quoteToken.symbol} <strong>{pair.baseToken.name}</strong></td>
                <td>{pair.priceUsd}</td>
                <td className={pair.priceChange.m5 > 0? 'text-green': 'text-danger'}>{pair.priceChange.m5}</td>
                <td className={pair.priceChange.h1 > 0? 'text-green': 'text-danger'}>{pair.priceChange.h1}</td>
                <td className={pair.priceChange.h6 > 0? 'text-green': 'text-danger'}>{pair.priceChange.h6}</td>
                <td className={pair.priceChange.h24 > 0? 'text-green': 'text-danger'}>{pair.priceChange.h24}</td>
                <td>{pair.liquidity.usd}</td>
                <td>{pair.fdv}</td>
            </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TokenPair;
