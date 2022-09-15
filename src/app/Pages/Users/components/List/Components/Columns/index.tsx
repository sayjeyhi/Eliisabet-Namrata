import React from "react";
import {Avatar} from "antd";
import {ColumnsType} from "antd/es/table";
import {User} from "../../../../../../Constants";
import Actions from "../Actions";

type Callback = (user: User) => void;

export const columns = (selectCallback?: Callback): ColumnsType<User> => [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Title',
    dataIndex: 'firstName',
    key: 'firstname',
    render: (_, user) => <div onClick={() => selectCallback && selectCallback(user)}>
      <Avatar src={user.image} alt="avatar" /> {' '} {user.firstName} {user.lastName}
    </div>,
  },
  {
    title: 'Birth date',
    dataIndex: 'dob',
    key: 'dob',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, user) => <Actions user={user} selectCallback={selectCallback} />,
  },
];
