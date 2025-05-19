// import {
//   Button,
//   Flex,
//   FormField,
//   Modal,
//   Text,
// } from '@/components';
// import { styled, useMediaQuery, useTheme } from '@mui/material';
// import { Autocomplete } from '@mui/material';
// import { Controller, useForm } from 'react-hook-form';
// import { TECH_OPTIONS } from '../../constants/techOptions';

// interface Props {
//   open: boolean;
//   onClose: () => void;
//   techStack: string[];
// }

// export const EditSkillModal = ({ open, onClose, techStack }: Props) => {
//   const isMobile = useMediaQuery('(max-width: 768px)');
//   const theme = useTheme();

//   return (
//     <Modal
//       open={open}
//       toggleModal={onClose}
//       size="medium"
//       hasCloseButton
//       style={{ backgroundColor: theme.palette.background.default }}
//     >
//       <Modal.Header>기술 스택 수정</Modal.Header>
//       <Modal.Body
//         position="center"
//         style={{ width: isMobile ? '100%' : '80%', margin: '2rem auto' }}
//       >
//         <S.Form onSubmit={}>
//           <Text style={{ ...theme.typography.h6, marginBottom: '1rem' }}>
//             사용한 기술 스택
//           </Text>
//           <FormField direction="column">
//             <Controller
//               name="techStack"
//               control={control}
//               render={({ field }) => (
//                 <Autocomplete
//                   multiple
//                   options={TECH_OPTIONS}
//                   value={field.value ?? []}
//                   onChange={(_, value) => field.onChange(value)}
//                   renderInput={(params) => (
//                     <FormField.Input {...params} placeholder="기술 스택" />
//                   )}
//                 />
//               )}
//             />
//           </FormField>
//           <Flex.Row justify="center" gap="1.5rem" margin="2rem 0 0">
//             <S.CancelButton label="취소" onClick={onClose} />
//             <S.SaveButton type="submit" label="저장하기" />
//           </Flex.Row>
//         </S.Form>
//       </Modal.Body>
//     </Modal>
//   );
// };

// const S = {
//   Form: styled('form')`
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//     padding-top: 1rem;
//     width: 100%;
//   `,
//   SaveButton: styled(Button)`
//     width: 200px;
//   `,
//   CancelButton: styled(Button)`
//     width: 200px;
//     background-color: ${({ theme }) => theme.palette.grey300};

//     &:hover,
//     &:active {
//       background-color: ${({ theme }) => theme.palette.grey400};
//     }
//   `,
// };
