import { Profile } from './Profile/Profile';
import user from '../user';
import { Statistics } from './Statistics/Statistics';
import statistics from '../data';
import { FriendList } from './FriendList/FriendList';
import friends from '../friends';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transaction from '../transactions';

export const App = () => {
  return (
    <>
      <Profile userProfile={user} />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory trans={transaction} />
    </>
  );
};
