/* eslint-disable @typescript-eslint/no-explicit-any */
import { THeader } from '@/types/table';
import {
  Table as MuiTable,
  Paper,
  styled,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

interface Props<T extends { [key: string]: any }> {
  headItems: THeader[];
  bodyItems: T[];
}

const Table = <T extends { [key: string]: any }>({
  headItems,
  bodyItems,
}: Props<T>) => {
  return (
    <TableContainer component={Paper}>
      <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
        <S.TableHead>
          <TableRow>
            {headItems.map(item => (
              <S.HeadCell key={item.text}>{item.text}</S.HeadCell>
            ))}
          </TableRow>
        </S.TableHead>
        <TableBody>
          {bodyItems.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {headItems.map((header, cellIndex) => {
                const value = row[header.value];
                return (
                  <TableCell key={cellIndex} component="th" scope="row">
                    {value}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;

const S = {
  TableHead: styled(TableHead)`
    // TODO: 컬러 상수로 변경 필요
    background-color: #f1f4fb;
    height: 40px;
  `,
  HeadCell: styled(TableCell)`
    border-bottom: none;
    padding: 0 1rem;
  `,
};
