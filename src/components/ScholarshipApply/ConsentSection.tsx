import { Heading, Text } from '@/components';
import personalInfoConsent from '@/constants/personalInfoConsent.json';
import { Consent } from '@/types/consent';
import { styled } from '@mui/material';

const ConsentSection = () => {
  const consentData: Consent = personalInfoConsent;

  return (
    <S.Section>
      <Heading as="h3">{consentData.title}</Heading>
      <Text dangerouslySetInnerHTML={{ __html: consentData.description }} />
    </S.Section>
  );
};

export default ConsentSection;

const S = {
  Section: styled('section')`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,
};
