import { Profile } from './Profile/Profile';
import user from '../data/user';
import { Statistics } from './Statistics/Statistics';
import statistics from '../data/data';
import { FriendList } from './FriendList/FriendList';
import friends from '../data/friends';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transaction from '../data/transactions';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory trans={transaction} />
    </>
  );
};
