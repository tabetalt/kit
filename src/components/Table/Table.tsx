/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import React from 'react';
import { jsx } from 'theme-ui';
import { UseTableOptions, useTable } from 'react-table';

export function Table<D extends object = {}>({
  children: _,
  ...props
}: React.PropsWithChildren<UseTableOptions<D>>) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(props);

  return (
    // apply the table props
    <table
      {...getTableProps()}
      sx={{ borderCollapse: 'collapse', width: '100%' }}
    >
      <thead
        sx={{
          bg: 'highlight',
        }}
      >
        {
          // Loop over the header rows
          headerGroups.map((headerGroup) => (
            // Apply the header row props
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                // Loop over the headers in each row
                headerGroup.headers.map((column) => (
                  // Apply the header cell props
                  <th
                    {...column.getHeaderProps()}
                    sx={{ 
                      p: 3, 
                      textAlign: 'left', 
                      fontWeight: 'normal',
                      width: column.width,
                      minWidth: column.minWidth,
                      maxWidth: column.maxWidth,
                    }}
                  >
                    {
                      // Render the header
                      column.render('Header')
                    }
                  </th>
                ))
              }
            </tr>
          ))
        }
      </thead>
      {/* Apply the table body props */}
      <tbody {...getTableBodyProps()}>
        {
          // Loop over the table rows
          rows.map((row) => {
            // Prepare the row for display
            prepareRow(row);
            return (
              // Apply the row props
              <tr
                {...row.getRowProps()}
                sx={{
                  bg: '#FAFAFA',
                  borderBottom: '1px solid',
                  borderBottomColor: 'highlight',
                  '&:last-child': {
                    border: '0',
                  },
                }}
              >
                {
                  // Loop over the rows cells
                  row.cells.map((cell) => {
                    // Apply the cell props
                    return (
                      <td {...cell.getCellProps()} sx={{ p: 3 }}>
                        {
                          // Render the cell contents
                          cell.render('Cell')
                        }
                      </td>
                    );
                  })
                }
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
}
