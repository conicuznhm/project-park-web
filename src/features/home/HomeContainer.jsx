import Item from "../../components/Item";
import Search from "../../components/Search";

import park1 from "../../assets/images/carpark/park1.png";
import car1 from "../../assets/images/carpark/car1.png";
import park2 from "../../assets/images/carpark/park2.png";
import park3 from "../../assets/images/carpark/park3.png";
import park4 from "../../assets/images/carpark/car5.jpg";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function HomeContainer() {
  const authUser = useAuth();
  return (
    <div className="flex flex-col gap-y-10">
      <div className="">
        {/* <div className="">
          <Search />
        </div> */}
        {/* <div>
          <div className="text-white text-2xl mt-4">Welcome</div>
        </div> */}
      </div>
      {authUser?.role === "offer" ? (
        <>
          <div>
            <div className="text-white text-2xl mt-4">Welcome Admin!!!</div>
          </div>
          <div className="flex flex-col gap-y-10">
            <Link to="/admin">
              <Item src={park1} alt="park1" name="Park lot setting" />
            </Link>
            <Link to="/slip">
              <Item src={park3} alt="park3" name="Reservation Profile" />
            </Link>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div>
            <div className="text-white text-2xl mt-4">Welcome User</div>
          </div>
          <div className="flex flex-col gap-y-10">
            <Link to="/user">
              <Item src={park1} alt="park1" name="User Profile" />
            </Link>
            <Link to="/vehicle">
              <Item src={car1} alt="car1" name="Vehicle Profile" />
            </Link>
            <Link to="/park">
              <Item src={park4} alt="park2" name="Park lots" />
            </Link>
            <Link to="/slip">
              <Item src={park3} alt="park3" name="Reservation Profile" />
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
