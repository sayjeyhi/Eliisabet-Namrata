import React from "react";
import {ColumnsType} from "antd/es/table";
import {Tag} from "antd";
import {Ticket} from "../../../../../../Constants";
import TinyUserView from "../TinyUserView";
import Actions from "../Actions";

export const columns: ColumnsType<Ticket> = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Ticket Number',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: 'User',
    dataIndex: 'userId',
    key: 'userId',
    render: userId => <TinyUserView userId={userId} />,
  },
  {
    title: 'Statis',
    key: 'status',
    dataIndex: 'status',
    render: (_, { status }) => (
      <Tag color={status === 'unassigned' ? '#ff3232' : '#555b00'} key={status}>
        {status.toUpperCase()}
      </Tag>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, ticket) => <Actions ticket={ticket} />,
  },
];
