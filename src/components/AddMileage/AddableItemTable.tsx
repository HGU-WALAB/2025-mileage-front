import { AddMileageModal } from '@/components/AddMileage';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const AddableItemTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>학기</TableCell>
            <TableCell>항목명</TableCell>
            <TableCell>뭐가들어오려나?</TableCell>
            <TableCell>추가하기</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {mileageList.map((item, index) => ( */}
          <TableRow
            key={1}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {1}
            </TableCell>
            <TableCell>{2025 - 1}</TableCell>
            <TableCell>{'뭐가 올까'}</TableCell>
            <TableCell>{'몰라몰라'}</TableCell>
            <TableCell>
              <AddMileageModal />
            </TableCell>
          </TableRow>
          {/* ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AddableItemTable;
