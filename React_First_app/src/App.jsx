import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CardTitle from "./Components/Title";

import AvtarImg from "./Components/Avtar";

import FollowButton from "./Components/Button";
import UserData from "./Components/UserData";
import data from "./assets/db";

function App() {
  return (
    <div className="mainDiv">
      <CardTitle />
      <div className="appDiv">
        {data.map((el) => (
          <div className="userCardDiv row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <AvtarImg image={el.image} />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center align-items-center ">
              <UserData name={el.name} address={el.address} postNum={el.post} folw={el.followe} />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center align-items-center">
              <FollowButton />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
