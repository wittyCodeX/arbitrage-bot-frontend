import { useEffect, useState } from "react";
import { API_URL } from "constants/index";


const Header = () => {
  const [bnbBalance, setBnbBalance] = useState("0");
  const [tokenBalance, setTokenBalance] = useState("0");
  const [targetSymbol, setTargetSymbol] = useState("BUSD");

  useEffect(() => {
    fetch(`${API_URL}/get_target_token`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setTargetSymbol(data.symbol);
    });
  }, [])
  return (
    <header className="p-3 text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <h1 className="d-flex align-items-center mb-2 mb-lg-0 text-success text-decoration-none">
            Arbitrage Bot
          </h1>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2 text-white"></a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-info">
                BNB:
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-bg-warning">
               {bnbBalance} BNB
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-info">
              {targetSymbol}:
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-bg-warning">
                {tokenBalance} {targetSymbol}
              </a>
            </li>
          </ul>

          <div className="text-end">
            {/* <button type="button" className="btn  btn-success me-2">
              Recover BNB
            </button>
            <button type="button" className="btn btn-info">
              Recover TOKEN
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
