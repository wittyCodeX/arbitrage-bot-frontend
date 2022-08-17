import { useEffect, useState } from "react";
import { API_URL } from "constants/index";

const TokenPair = () => {
  const [histories, setHistories] = useState([]);
  useEffect(() => {
    fetch(`${API_URL}/get_bot_histories`)
      .then((res) => res.json())
      .then((data) => {
        console.log('history: ', data)
        setHistories(data);
      });
  }, []);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">TXHASH</th>
          <th scope="col">DEX FROM</th>
          <th scope="col">DEX TO</th>
          <th scope="col">BASE_TOKEN</th>
          <th scope="col">TARGET_TOKEN</th>
          <th scope="col">AMOUNT_IN</th>
          <th scope="col">AMOUNT_OUT</th>
          <th scope="col">PROFIT</th>
          <th scope="col">GAS_USED</th>
          <th scope="col">DATE_TIME</th>
        </tr>
      </thead>
      <tbody>
        {histories.length > 0 &&
          histories.map((history) => (
            <tr>
              <td>
                <a href={`https://bscscan.com/tx/${history.txHash}`} target="blank">{history.txHash.substring(0, 5)}</a>
              </td>
              <td>{history.dex_from}</td>
              <td>{history.dex_to}</td>
              <td>{history.base_token}</td>
              <td>{history.target_token}</td>
              <td>{history.amount_in}</td>
              <td>{history.amount_out}</td>
              <td>{history.profit}</td>
              <td>{history.gas_used}</td>
              <td>{history.datetime}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
export default TokenPair;
