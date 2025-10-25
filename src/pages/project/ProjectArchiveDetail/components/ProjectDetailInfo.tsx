import { ProjectDetailResponse, ProjectDetailFormValues } from '../../types/projectDetail';
import { Flex, Text, Button, FormField, Input } from '@/components';
import { styled, Autocomplete } from '@mui/material';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchProjectDetail } from '../../apis/project';
import useInput from '@/hooks/useInput';
import { TECH_OPTIONS } from '../../constants/techOptions';

interface Props {
  projectDetail: ProjectDetailResponse;
}

const ProjectDetailInfo = ({ projectDetail }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [techStack, setTechStack] = useState<string[]>(projectDetail.techStack);
  const [otherLinks, setOtherLinks] = useState<Array<{ label: string; url: string }>>(projectDetail.other_links);
  
  const queryClient = useQueryClient();

  const { value: name, handleChange: onChangeName } = useInput(projectDetail.name);
  const { value: description, handleChange: onChangeDescription } = useInput(projectDetail.description);
  const { value: role, handleChange: onChangeRole } = useInput(projectDetail.role);
  const { value: startDate, handleChange: onChangeStartDate } = useInput(projectDetail.start_date);
  const { value: githubId, handleChange: onChangeGithubId } = useInput(projectDetail.github_id);
  const { value: githubLink, handleChange: onChangeGithubLink } = useInput(projectDetail.github_link);

  const mutation = useMutation({
    mutationFn: patchProjectDetail,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projectDetail', projectDetail.projectId.toString()] });
      setIsEditing(false);
    },
  });

  const handleSave = () => {
    const formValues: ProjectDetailFormValues = {
      name,
      description,
      techStack,
      role,
      start_date: startDate,
      github_id: githubId,
      github_link: githubLink,
      other_links: otherLinks,
      thumbnail: null,
    };

    mutation.mutate({
      projectId: projectDetail.projectId.toString(),
      formValues,
    });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setTechStack(projectDetail.techStack);
    setOtherLinks(projectDetail.other_links);
  };

  const addOtherLink = () => {
    setOtherLinks([...otherLinks, { label: '', url: '' }]);
  };

  const updateOtherLink = (index: number, field: 'label' | 'url', value: string) => {
    const newLinks = [...otherLinks];
    newLinks[index][field] = value;
    setOtherLinks(newLinks);
  };

  const removeOtherLink = (index: number) => {
    const newLinks = otherLinks.filter((_, i) => i !== index);
    setOtherLinks(newLinks);
  };

  return (
    <InfoContainer>
      <LeftColumn>
        <SectionCard>
          <FormField direction="column" style={{ gap: '0.5rem' }}>
            <FormField.Label label="프로젝트 이름" required />
            <FormField.Input
              value={isEditing ? name : projectDetail.name}
              onChange={isEditing ? onChangeName : undefined}
              disabled={!isEditing}
              placeholder="프로젝트 이름을 작성하세요"
              style={{ width: '100%' }}
            />
          </FormField>
        </SectionCard>

        <SectionCard>
          <FormField direction="column" style={{ gap: '0.5rem' }}>
            <FormField.Label label="프로젝트 소개" />
            <FormField.Input
              value={isEditing ? description : projectDetail.description}
              onChange={isEditing ? onChangeDescription : undefined}
              disabled={!isEditing}
              multiline
              rows={3}
              placeholder="프로젝트 소개를 작성하세요"
              style={{ width: '100%' }}
            />
          </FormField>
        </SectionCard>

        <SectionCard>
          <FormField direction="column" style={{ gap: '0.5rem' }}>
            <FormField.Label label="기술 스택" required />
            {isEditing ? (
              <Autocomplete
                multiple
                freeSolo
                options={TECH_OPTIONS}
                value={techStack}
                onChange={(_, value) => setTechStack(value)}
                renderInput={params => (
                  <FormField.Input {...params} placeholder="기술 스택을 선택하거나 직접 입력하세요" />
                )}
              />
            ) : (
              <Flex.Row gap="0.5rem" wrap="wrap">
                {projectDetail.techStack.map((tech, index) => (
                  <div
                    key={index}
                    style={{
                      background: '#E8EEFC',
                      color: '#537FF1',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '1rem',
                      fontSize: '0.875rem',
                    }}
                  >
                    {tech}
                  </div>
                ))}
              </Flex.Row>
            )}
          </FormField>
        </SectionCard>

        <SectionCard>
          <FormField direction="column" style={{ gap: '0.5rem' }}>
            <FormField.Label label="내 역할" />
            <FormField.Input
              value={isEditing ? role : projectDetail.role}
              onChange={isEditing ? onChangeRole : undefined}
              disabled={!isEditing}
              placeholder="프론트엔드, 백엔드, 기타"
              style={{ width: '100%' }}
            />
          </FormField>
        </SectionCard>

        <SectionCard>
          <FormField direction="column" style={{ gap: '0.5rem' }}>
            <FormField.Label label="프로젝트 시작일" required />
            <FormField.Input
              type="date"
              value={isEditing ? startDate : projectDetail.start_date}
              onChange={isEditing ? onChangeStartDate : undefined}
              disabled={!isEditing}
              style={{ width: '100%' }}
            />
          </FormField>
        </SectionCard>

        <SectionCard>
          <FormField direction="column" style={{ gap: '0.5rem' }}>
            <FormField.Label label="깃허브 ID" />
            <FormField.Input
              value={isEditing ? githubId : projectDetail.github_id}
              onChange={isEditing ? onChangeGithubId : undefined}
              disabled={!isEditing}
              placeholder="깃허브 아이디를 입력하세요"
              style={{ width: '100%' }}
            />
          </FormField>
        </SectionCard>
      </LeftColumn>

      <RightColumn>
        <SectionCard>
          <ProjectImage>
            <div style={{ color: '#979797', fontSize: '0.875rem' }}>
              📷 프로젝트 이미지
            </div>
            {isEditing && (
              <EditIcon>
                ✏️
              </EditIcon>
            )}
          </ProjectImage>
        </SectionCard>

        <SectionCard>
          <FormField direction="column" style={{ gap: '1rem' }}>
            <FormField.Label label="깃허브 레포지토리 링크" />
            <FormField.Input
              value={isEditing ? githubLink : projectDetail.github_link}
              onChange={isEditing ? onChangeGithubLink : undefined}
              disabled={!isEditing}
              placeholder="http://github.com/username/repo"
              style={{ width: '100%' }}
            />
          </FormField>
        </SectionCard>

        <SectionCard>
          <Text as="h6" bold style={{ marginBottom: '1rem' }}>기타 링크</Text>
          {isEditing ? (
            <Flex.Column gap="0.5rem">
              {otherLinks.map((link, index) => (
                <Flex.Row key={index} gap="0.5rem" align="center">
                  <Input
                    value={link.label}
                    onChange={(e) => updateOtherLink(index, 'label', e.target.value)}
                    placeholder="링크 라벨"
                    style={{ flex: 1 }}
                  />
                  <Input
                    value={link.url}
                    onChange={(e) => updateOtherLink(index, 'url', e.target.value)}
                    placeholder="http://github.com/username/repo"
                    style={{ flex: 2 }}
                  />
                  <Button
                    label="삭제"
                    variant="outlined"
                    size="small"
                    onClick={() => removeOtherLink(index)}
                    style={{ color: '#ff4444', borderColor: '#ff4444', flexShrink: 0 }}
                  />
                </Flex.Row>
              ))}
              <Button
                label="+ 링크 추가"
                variant="outlined"
                onClick={addOtherLink}
                size="medium"
              />
            </Flex.Column>
          ) : (
            <Flex.Column gap="0.5rem">
              {projectDetail.other_links.map((link, index) => (
                <Flex.Row key={index} justify="space-between">
                  <Text>{link.label}:</Text>
                  <Text color="blue500">{link.url}</Text>
                </Flex.Row>
              ))}
            </Flex.Column>
          )}
        </SectionCard>

        <SectionCard>
          {isEditing ? (
            <Flex.Row gap="1rem">
              <Button
                label="취소"
                variant="outlined"
                onClick={handleCancel}
                size="full"
              />
              <Button
                label="수정 완료"
                variant="contained"
                color="blue"
                onClick={handleSave}
                size="full"
                disabled={mutation.isPending}
              />
            </Flex.Row>
          ) : (
            <Button
              label="수정하기"
              variant="contained"
              color="blue"
              onClick={() => setIsEditing(true)}
              size="full"
            />
          )}
        </SectionCard>
      </RightColumn>
    </InfoContainer>
  );
};

export default ProjectDetailInfo;

const InfoContainer = styled('div')`
  display: flex;
  gap: 2rem;
  width: 100%;
  
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const RightColumn = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SectionCard = styled('div')`
  background: white;
  padding: 0.5rem;
`;

const ProjectImage = styled('div')`
  width: 100%;
  height: 200px;
  background: #f5f5f5;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #ddd;
  position: relative;
`;

const EditIcon = styled('div')`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  background: white;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;