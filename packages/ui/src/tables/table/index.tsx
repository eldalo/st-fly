import styles from './table.module.css';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from '@tanstack/react-table';
import classNames from 'classnames';

import { TableBasePropsType } from './type';

export function TableBasic({
  columns,
  data,
  theme = 'light',
  rounded = 'none',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: TableBasePropsType<any>) {
  const table = useReactTable({
    columns,
    data: data || [],
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <table className={classNames(styles.table, [styles[theme], styles[rounded]])}>
      <thead className={styles.thead}>
        {table.getHeaderGroups().map((tr) => (
          <tr key={tr.id}>
            {tr.headers.map((th) => (
              <th
                key={th.id}
                colSpan={th.colSpan}
                onClick={th.column.getToggleSortingHandler()}
              >
                <div className="align-items-center d-flex justify-content-between">
                  {th.isPlaceholder
                    ? null
                    : flexRender(th.column.columnDef.header, th.getContext())}
                  {{
                    asc: (
                      <span
                        className={`${styles.sorted} ${styles.sorted_active}`}
                      >
                        <i className="icon-Atom_Icon-Up-small-Arrow" />
                      </span>
                    ),
                    desc: (
                      <span
                        className={`${styles.sorted} ${styles.sorted_active}`}
                      >
                        <i className="icon-Atom_Icon-Down-small-Arrow" />
                      </span>
                    ),
                  }[th.column.getIsSorted() as string] ?? null}
                </div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className={styles.tbody}>
        {table.getRowModel().rows.map((tr) => (
          <tr key={tr.id}>
            {tr.getVisibleCells().map((td) => (
              <td key={td.id}>
                {flexRender(td.column.columnDef.cell, td.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
