import Item from '../../components/Item';
import Search from '../../components/Search';

import park1 from '../../assets/images/carpark/park1.png';
import car1 from '../../assets/images/carpark/car1.png';
import park2 from '../../assets/images/carpark/park2.png';
import park3 from '../../assets/images/carpark/park3.png';
import { Link } from 'react-router-dom';

export default function HomeContainer() {
  return (
    <div className="flex flex-col gap-y-6 mt-10">
      <div className="w-5/6 ml-8">
        <div>
          <Search />
        </div>
        <div>
          <span>Hi</span>
        </div>
      </div>
      <div className="flex flex-col w-5/6 ml-16 gap-y-6">
        <Link to="/user">
          <Item src={park1} alt="park1" name="User Profile" />
        </Link>
        <Link to="/vehicle">
          <Item src={car1} alt="car1" name="Vehicle Profile" />
        </Link>
        <Link to="/reserve">
          <Item src={park2} alt="park2" name="Reservations" />
        </Link>
        <Link to="/slip">
          <Item src={park3} alt="park3" name="Slips" />
        </Link>
      </div>
    </div>
  );
}
