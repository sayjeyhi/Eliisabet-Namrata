import React from 'react';
import {Button, Space, Modal} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useQuery } from "react-query";
import {User} from "../../../../../../Constants";
import {deleteUser} from "../../../../../../Services/user";
import {generatePath, useNavigate} from "react-router-dom";

type Props = {
  user: User,
  selectCallback?: (user: User) => void;
}

const { confirm } = Modal;

function Actions({ user, selectCallback }: Props) {
  const navigate = useNavigate();
  const { refetch } = useQuery(`delete_user_${user.id}`, () => deleteUser(user.id), {
    refetchOnWindowFocus: false,
    enabled: false // disable this query from automatically running
  });

  const handleClickDelete = () => {
    confirm({
      title: `Are you sure delete this User (#${user.id})?`,
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

  const handleNavigateToEdit = () => {
    navigate(generatePath('/users/edit/:id', { id: user.id + ''}));
  }

  return <Space size="middle">
    {!!selectCallback ?
      <Button size="small" onClick={() => selectCallback(user)} >Select</Button> :
      <>
        <Button size="small" onClick={handleNavigateToEdit} >Edit</Button>
        <Button size="small" onClick={handleClickDelete} danger>Delete</Button>
      </>
    }
  </Space>
}

export default Actions;
