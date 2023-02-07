import { useSelector } from 'react-redux';
import { selectUser } from '../redux/auth-slice';

export default function UserSetting() {
  const { firstName, lastName, phone } = useSelector(selectUser);
  // console.log(authUser);
  return (
    <div>
      <div>
        <span>{firstName}</span>
      </div>
      <div>
        <span>{lastName}</span>
      </div>
      <div>
        <span>{phone}</span>
      </div>
    </div>
  );
}
