import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Dropdown, Label, TextInput, Modal } from "flowbite-react";
import { addUser, removeUser } from "../reducers/Users";
export default function Home() {
  const users = useSelector((state) => state.users.accounts);
  const numberOfAccounts = useSelector((state) => state.users.numberOfAccounts);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [type, setType] = useState(null);

  const AddAccount = () => {
    const account = {
      id: numberOfAccounts + 1,
      customerName: name,
      accountNumber: number,
      accountType: type,
    };
    dispatch(addUser(account));
  };

  const deleteAccount = (e) => {
    const id = e.target.value;
    dispatch(removeUser(id));
  };
  return (
    <>
      <Button onClick={() => setShow(true)} className="ml-5 rounded-full">
        Create account
      </Button>
      <Modal show={show} size="md" popup={true} onClose={() => setShow(false)}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Create an account
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="customerName" value="Customer Name" />
              </div>
              <TextInput
                name="customerName"
                placeholder="Enter your Name"
                required={true}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="accountNumber" value="Account Number" />
              </div>
              <TextInput
                id="accountNumber"
                placeholder="Enter your account number"
                required={true}
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div>
              <Dropdown
                label="Account type"
                value={type}
                name="account_type"
                inline={true}
              >
                <Dropdown.Item onClick={() => setType("savings")}>
                  Savings
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setType("Student accounts")}>
                  Student accounts
                </Dropdown.Item>
              </Dropdown>
            </div>
            <div className="w-full">
              <Button onClick={AddAccount}>Create Account</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <div className="p-10">
        <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Id
                </th>
                <th scope="col" className="py-3 px-6">
                  customerName
                </th>
                <th scope="col" className="py-3 px-6">
                  accountNumber
                </th>
                <th scope="col" className="py-3 px-6">
                  accountType
                </th>
                <th scope="col" className="py-3 px-6">
                  action
                </th>
              </tr>
            </thead>
            <tbody>
              {users?.map((account, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {account.id}
                    </th>
                    <td className="py-4 px-6">{account.customerName}</td>
                    <td className="py-4 px-6">{account.accountNumber}</td>
                    <td className="py-4 px-6">{account.accountType}</td>
                    <td className="py-4 px-6">
                      <button
                        className="bg-red-500 p-4 rounded-full text-white"
                        onClick={deleteAccount}
                        value={account.id}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
