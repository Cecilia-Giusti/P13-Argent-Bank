import { accountDataInt } from "../models";

type Props = {
  account: accountDataInt;
};

/**
 * Component to view account details
 * @component
 * @param {accountDataInt} account - Acoount user
 * @return {JSX.Element}
 */
const Account = ({ account }: Props): JSX.Element => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{account.title}</h3>
        <p className="account-amount">
          ${account.amount.toLocaleString("EN-IN")}
        </p>
        <p className="account-amount-description">{account.description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
};

export default Account;
