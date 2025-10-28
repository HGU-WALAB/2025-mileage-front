import { Flex, Title, Dropdown } from '@/components';
import { PlusIcon } from '@/assets';
import { Button } from '@/components';
import { 
  PROJECT_STATUS_OPTIONS, 
  PROGRAMMING_LANGUAGE_OPTIONS, 
  SORT_ORDER_OPTIONS 
} from '../../constants/projectArchiveOptions';

interface Props {
  statusFilter: string;
  setStatusFilter: (value: string) => void;
  languageFilter: string;
  setLanguageFilter: (value: string) => void;
  sortOrder: string;
  setSortOrder: (value: string) => void;
  onOpenModal: () => void;
}

export const MobileProjectArchiveHeader = ({
  statusFilter,
  setStatusFilter,
  languageFilter,
  setLanguageFilter,
  sortOrder,
  setSortOrder,
  onOpenModal,
}: Props) => {

  return (
    <Flex.Column gap="1rem" margin="0 0 1rem 0">
      <Flex.Row justify="space-between" align="center">
        <Title label="프로젝트" />
        <Button
          label="추가"
          size="large"
          icon={PlusIcon}
          onClick={onOpenModal}
        />
      </Flex.Row>
      <Flex.Row gap="0.5rem" align="center" wrap="wrap">
        <Dropdown
          label="상태"
          items={PROJECT_STATUS_OPTIONS}
          selectedItem={statusFilter}
          setSelectedItem={setStatusFilter}
          width="100px"
        />
        <Dropdown
          label="사용언어"
          items={PROGRAMMING_LANGUAGE_OPTIONS}
          selectedItem={languageFilter}
          setSelectedItem={setLanguageFilter}
          width="120px"
        />
        <Dropdown
          label="최신순"
          items={SORT_ORDER_OPTIONS}
          selectedItem={sortOrder}
          setSelectedItem={setSortOrder}
          width="100px"
        />
      </Flex.Row>
    </Flex.Column>
  );
};
