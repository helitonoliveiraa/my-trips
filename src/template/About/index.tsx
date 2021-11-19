import { LinkWrapper } from '@/components/LinkWrapper';
import { XCircle } from '@styled-icons/bootstrap/XCircle';

import * as S from './styles';

export function AboutTemplate() {
  return (
    <S.Container>
      <LinkWrapper href="/">
        <XCircle />
      </LinkWrapper>

      <h1>My Trips</h1>

      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus repellendus fuga in temporibus consectetur ullam totam
          consequatur deleniti nam sapiente aperiam eius, laboriosam quo magni.
          Dolores exercitationem ad fugiat consequatur!
        </p>
      </div>
    </S.Container>
  );
}
