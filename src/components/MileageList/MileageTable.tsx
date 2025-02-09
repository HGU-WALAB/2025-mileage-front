import { MileageResponse } from '@/types/mileage';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

interface Props {
  mileageList: MileageResponse[];
}

const MileageTable = ({ mileageList }: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>학기</TableCell>
            <TableCell>항목명</TableCell>
            <TableCell>비고</TableCell>
            <TableCell>참여여부</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mileageList.map((item, index) => (
            <TableRow
              key={item.capabilityId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell>{item.semester}</TableCell>
              <TableCell>{item.subitemName}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.done ? 'Y' : 'N'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MileageTable;
