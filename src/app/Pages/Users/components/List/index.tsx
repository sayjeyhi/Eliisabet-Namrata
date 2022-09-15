import React from 'react';
import { Table } from 'antd';
import { useQuery } from "react-query";
import { columns } from './Components/Columns';
import { fetchUsers } from "../../../../Services/user";
import {User} from "../../../../Constants";

type Props = {
  callback?: (user: User) => void;
}

function UsersList({ callback }: Props) {
  const { data, status } = useQuery("users", fetchUsers);

  return <>
    {status === "error" && <p>Error fetching users</p>}
    {status === "loading" && <p>Fetching users...</p>}
    {status === "success" && (
      <Table columns={columns(callback)} dataSource={data as any} />
    )}
  </>;
}

export default UsersList;
