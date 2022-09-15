import React, {useState} from 'react';
import {Button, Space, Modal} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useQuery } from "react-query";
import {Ticket, User} from "../../../../../../Constants";
import {deleteTicket} from "../../../../../../Services/ticket";
import UsersList from "../../../../../Users/components/List";

type Props = {
  ticket: Ticket
}

const { confirm } = Modal;

function Actions({ ticket }: Props) {
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const { refetch } = useQuery(`delete_ticket_${ticket.id}`, () => deleteTicket(ticket.id), {
    refetchOnWindowFocus: false,
    enabled: false // disable this query from automatically running
  });

  const handleClickDelete = () => {
    confirm({
      title: `Are you sure delete this Ticket (#${ticket.number})?`,
      icon: <ExclamationCircleOutlined/>,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        refetch();
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  const handleAssignToUser = () => {
    setIsAssignModalOpen(true);
  }

  const handleOk = () => {
    setIsAssignModalOpen(false);
  };

  const handleCancel = () => {
    setIsAssignModalOpen(false);
  };

  const handleSelectUser = (user: User) => {
    setIsAssignModalOpen(false);

    // todo: update ticket
    console.log("User selected", user)
  }

  return <Space size="middle">
    <Button size="small" onClick={handleAssignToUser}>Assign to user</Button>
    <Button size="small" onClick={handleClickDelete} danger>Delete</Button>

    <Modal title="Assign To User" width={1000} open={isAssignModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <UsersList callback={handleSelectUser} />
    </Modal>
  </Space>
}

export default Actions;
