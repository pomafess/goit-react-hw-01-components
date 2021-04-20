// import logo from './logo.svg';
import './App.css';
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory"

import user from "./components/Profile/user.json";
import statisticalData from './components/Statistics/statistical-data.json';
import friends from "./components/FriendList/friends.json";
import transactions from './components/TransactionHistory/transactions.json';



function App() {
  return (
    <div className="App">
      <Profile {...user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
