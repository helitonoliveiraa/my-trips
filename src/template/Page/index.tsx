import { LinkWrapper } from '@/components/LinkWrapper';
import { XCircle } from '@styled-icons/bootstrap/XCircle';

import * as S from './styles';

type PageTemplateProps = {
  page: {
    heading: string;
    body: {
      html: string;
    };
  };
};

export function PageTemplate({ page }: PageTemplateProps) {
  return (
    <S.Container>
      <LinkWrapper href="/">
        <XCircle />
      </LinkWrapper>

      <h1>{page.heading}</h1>

      <div
        dangerouslySetInnerHTML={{
          __html: page.body.html,
        }}
      ></div>
    </S.Container>
  );
}
