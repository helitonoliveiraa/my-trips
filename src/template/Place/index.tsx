import Image from 'next/image';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
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
    text?: string;
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
      <NextSeo
        title={`${place.name} - My Trips`}
        description={
          place.description?.text ||
          'A simple project to show in a map the places that I went and show more informations and photos when clicked.'
        }
        canonical="https://my-trips-ashen.vercel.app"
        openGraph={{
          url: 'https://my-trips-ashen.vercel.app',
          title: `${place.name} - My Trips`,
          description:
            place.description?.text ||
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`,
            },
          ],
        }}
      />
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
