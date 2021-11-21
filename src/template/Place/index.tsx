import Image from 'next/image';
import { useRouter } from 'next/router';
import { XCircle } from '@styled-icons/bootstrap/XCircle';

import { LinkWrapper } from '@/components/LinkWrapper';

import * as S from './styles';

type Gallery = {
  url: string;
  height: number;
  width: number;
};

type Place = {
  id: string;
  slug: string;
  name: string;
  location: {
    latitude: number;
    longitude: number;
  };
  description?: {
    html: string;
  };
  gallery: Gallery[];
};

type PlaceTemplateProps = {
  place: Place;
};

export function PlaceTemplate({ place }: PlaceTemplateProps) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return null;
  }

  return (
    <>
      <LinkWrapper href="/">
        <XCircle />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <h1>{place.name}</h1>

          <div
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />

          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                key={`photo-${index}`}
                src={image.url}
                alt={place.name}
                width={1000}
                height={600}
                quality={75}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
