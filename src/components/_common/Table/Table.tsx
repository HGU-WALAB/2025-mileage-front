/* eslint-disable @typescript-eslint/no-explicit-any */
import { THeader } from '@/types/table';
import { getOpacityColor } from '@/utils/getOpacityColor';
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
    <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
      <MuiTable sx={{ minWidth: 400 }} aria-label="table">
        <S.TableHead>
          <TableRow>
            {headItems.map(item => (
              <S.HeadCell
                key={item.text}
                align={item.align ?? 'left'}
                width={item.width}
              >
                {item.text}
              </S.HeadCell>
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
                  <S.BodyCell
                    key={cellIndex}
                    component="th"
                    scope="row"
                    align={header.align}
                    width={header.width}
                  >
                    {value}
                  </S.BodyCell>
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
    background-color: ${({ theme }) => theme.palette.primary.light};
    height: 40px;
  `,
  HeadCell: styled(TableCell)`
    border-bottom: none;
    padding: 0 1rem;
  `,
  BodyCell: styled(TableCell)`
    border-bottom: 1px solid
      ${({ theme }) => getOpacityColor(theme.palette.grey200, 0.4)};
  `,
};
