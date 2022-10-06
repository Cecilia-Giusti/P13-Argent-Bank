import Account from "../components/Account";
import { accountDataInt, editUserDataInt, userDataInt } from "../models";
import { useState, useRef } from "react";
import { editUser } from "../services/editUser";
import { useAppSelector } from "../app/hooks";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const userData = useAppSelector((state) => state.user.user);

  const formEditUser = useRef<HTMLFormElement>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const editMessage = document.querySelector(".editMessage");
    if (editMessage !== null) {
      editMessage.innerHTML = "";
    }

    if (formEditUser.current !== null) {
      const newFirstName = formEditUser.current[0] as HTMLInputElement;
      const newLastName = formEditUser.current[1] as HTMLInputElement;

      if (userData) {
        const newDataUser: editUserDataInt = {
          firstName: newFirstName.value
            ? newFirstName.value
            : userData.firstName,
          lastName: newLastName.value ? newLastName.value : userData.lastName,
        };
      }

      // PUT
      // editUser(newDataUser, token, editMessage);
      // setIsEditing(false);
    }
  };

  return (
    <main className="main bg-dark">
      {isEditing && userData ? (
        <div className="header">
          <h1>Welcome back</h1>
          <form ref={formEditUser} onSubmit={(e) => handleSubmit(e)}>
            <input
              className="edit-input"
              type="text"
              placeholder={userData.firstName}
              autoFocus
            />
            <input
              className="edit-input"
              type="text"
              placeholder={userData.lastName}
            />
            <br />
            <input type="submit" className=" edit-button-active" value="Save" />

            <input
              type="button"
              className=" edit-button-active"
              onClick={() => setIsEditing(false)}
              value="Cancel"
            />
            <div className="editMessage"></div>
          </form>
        </div>
      ) : (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {userData?.firstName} {userData?.lastName}
          </h1>
          <button className="edit-button" onClick={() => setIsEditing(true)}>
            Edit Name
          </button>
        </div>
      )}

      <h2 className="sr-only">Accounts</h2>
      {accountData.map((account, index) => {
        return <Account key={index} account={account} />;
      })}
    </main>
  );
};

export default Profile;
