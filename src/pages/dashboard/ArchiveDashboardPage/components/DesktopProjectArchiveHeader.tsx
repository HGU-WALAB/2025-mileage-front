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

export const DesktopProjectArchiveHeader = ({
  statusFilter,
  setStatusFilter,
  languageFilter,
  setLanguageFilter,
  sortOrder,
  setSortOrder,
  onOpenModal,
}: Props) => {

  return (
    <Flex.Row justify="space-between" align="center" margin="0 0 1rem 0">
      <Title label="프로젝트" />
      <Flex.Row gap="0.75rem" align="center">
        <Dropdown
          label="상태"
          items={PROJECT_STATUS_OPTIONS}
          selectedItem={statusFilter}
          setSelectedItem={setStatusFilter}
          width="120px"
        />
        <Dropdown
          label="사용언어"
          items={PROGRAMMING_LANGUAGE_OPTIONS}
          selectedItem={languageFilter}
          setSelectedItem={setLanguageFilter}
          width="140px"
        />
        <Dropdown
          label="최신순"
          items={SORT_ORDER_OPTIONS}
          selectedItem={sortOrder}
          setSelectedItem={setSortOrder}
          width="120px"
        />
        <Button
          label="새 프로젝트 추가하기"
          size="large"
          icon={PlusIcon}
          onClick={onOpenModal}
        />
      </Flex.Row>
    </Flex.Row>
  );
};
