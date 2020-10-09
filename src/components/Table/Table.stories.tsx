import React from 'react';
import { Table } from './Table';

export default {
  title: 'Table',
  component: Table,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const defaultTable = (props: any) => {
  return (
    <Table
      {...props}
      columns={[
        {
          Header: 'Column 1',
          accessor: 'col1', // accessor is the "key" in the data
          width: '50%'
        },
        {
          Header: 'Column 2',
          accessor: 'col2',
          width: '50%'
        },
      ]}
      data={[
        {
          col1: 'Hello',
          col2: 'World',
        },
        {
          col1: 'react-table',
          col2: 'rocks',
        },
        {
          col1: 'whatever',
          col2: 'you want',
        },
      ]}
    />
  );
};
