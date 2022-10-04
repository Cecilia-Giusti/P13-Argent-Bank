import Account from "../components/Account";
import { accountDataInt, userDataInt } from "../models";

type Props = {
  userData: userDataInt;
};

const Profile = ({ userData }: Props) => {
  const accountData: accountDataInt[] = [
    {
      title: "Argent Bank Checking (x8349)",
      amount: 2082.79,
      description: "Available Balance",
    },
    {
      title: "Argent Bank Savings (x6712)",
      amount: 10928.42,
      description: "Available Balance",
    },
    {
      title: "Argent Bank Credit Card (x8349)",
      amount: 184.3,
      description: "Current Balance",
    },
  ];
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {userData.firstName} {userData.lastName}
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      {accountData.map((account, index) => {
        return <Account key={index} account={account} />;
      })}
    </main>
  );
};

export default Profile;
