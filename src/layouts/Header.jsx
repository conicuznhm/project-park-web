import { Dropdown } from 'flowbite-react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { HamburgerIcon } from '../assets/icons';
import { logoutCase } from '../redux/auth-slice';
import { removeAccessToken } from '../utils/local-storage';

const mapping = {
  admin: 'Admin',
  home: 'Home',
  search: 'Search',
  user: 'User Setting',
  vehicle: 'Vehicle Setting',
  park: 'Park Setting',
  navigate: 'Navigation',
  reserve: 'Reservation',
  slip: 'Slip'
};

export default function Header() {
  const location = useLocation();
  // console.log(location);

  const dispatch = useDispatch();
  const handleClickOut = () => {
    removeAccessToken();
    dispatch(logoutCase());
  };

  const navigate = useNavigate();
  const handleClickBack = () => {
    navigate(-1);
  };

  const handleClickHome = () => {
    navigate('/home');
  };

  const handleClickReserve = () => {
    navigate('/reserve');
  };

  return (
    <div className="flex justify-between">
      <div className="w-1/5">
        <Dropdown label={<HamburgerIcon />} inline={true} arrowIcon={false}>
          <Dropdown.Item onClick={handleClickBack}>Back</Dropdown.Item>
          {location.pathname === '/home' ? null : (
            <Dropdown.Item onClick={handleClickHome}>Home</Dropdown.Item>
          )}
          <Dropdown.Item onClick={handleClickReserve}>Reservation</Dropdown.Item>
          <Dropdown.Item onClick={handleClickOut}>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
      <div className="">
        <h1>{mapping[location.pathname.split('/')[1]]}</h1>
      </div>
    </div>
  );
}
