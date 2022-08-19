import { useEffect, useState } from "react";
import { API_URL } from "constants/index";


const Header = () => {
  const [baseToken, setBaseToken] = useState("BNB");
  const [tokenBalance, setTokenBalance] = useState("0");
  const [targetSymbol, setTargetSymbol] = useState("BUSD");
  const [baseTokenList, setBaseTokenList] = useState([]);
  const [defaultValue, setDefaultValue] = useState("BNB")
  useEffect(() => {
    fetch(`${API_URL}/get_base_token`)
      .then((res) => res.json())
      .then((data) => {
        setBaseTokenList(data);
      });
  }, []);
  useEffect(() => {
    fetch(`${API_URL}/get_target_token`)
    .then((res) => res.json())
    .then((data) => {
      setTargetSymbol(data.symbol);
      setDefaultValue(data.basetoken.sym)
    });
  }, [])

  const handleBaseTokenChange = (e) => {
    const currentToken = e.target.value;
    setBaseToken(currentToken)
    fetch(`${API_URL}/change_base_token?token=${currentToken}`, {
      method: 'POST',
    }).then(res => {
      alert("Successfly saved the new bot parameters")
      console.log(res);
    }).catch(error => {
      alert("Failed to save the new parameter!");
      console.error('There was an error!', error);
  });
  }

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
                Base Token: 
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-bg-warning">
               {baseToken}
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-info">
              Target Token: 
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-bg-warning">
                {targetSymbol}
              </a>
            </li>
          </ul>

          <div className="text-end d-inline-flex justify-content-center">
            <div className="text-primary d-flex justify-content-center  align-items-center">
              BaseToken: 
            </div>
            <select className="form-control m-2" onChange={e => handleBaseTokenChange(e)} defaultValue={defaultValue}>
              {baseTokenList.length > 0 && baseTokenList.map(baseToken => (
                <option value={baseToken.sym} key={baseToken.address}>{baseToken.sym}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
