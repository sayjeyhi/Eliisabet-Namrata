import React, {useState} from 'react';
import type { RadioChangeEvent } from 'antd';
import { Table, Radio, Divider } from 'antd';
import { useQuery } from "react-query";
import { columns } from './Components/Columns';
import { fetchTickets } from "../../../../Services/ticket";

const FILTER_OPTIONS = [
  { label: 'All', value: '' },
  { label: 'Un Assigned', value: 'unassigned' },
  { label: 'Assigned', value: 'assigned' },
  { label: 'Completed', value: 'completed' },
];

const TicketsList: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState('');
  const { data, status } = useQuery(`tickets_${statusFilter}`, () => fetchTickets(statusFilter));

  const handleFilterChange = ({ target: { value } }: RadioChangeEvent) => {
    setStatusFilter(value);
  };

  return <>
    {status === "error" && <p>Error fetching data</p>}
    {status === "loading" && <p>Fetching data...</p>}
    {status === "success" && (
      <>
        <Radio.Group
          optionType="button"
          buttonStyle="solid"
          options={FILTER_OPTIONS}
          onChange={handleFilterChange}
          value={statusFilter}
        />
        <Divider />
        <Table columns={columns} dataSource={data as any} />
      </>
    )}
  </>;
}

export default TicketsList;
