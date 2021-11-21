import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
import { InfoCircle } from '@styled-icons/bootstrap/InfoCircle';

import { MapProps } from '@/components/Map';
import { LinkWrapper } from '@/components/LinkWrapper';

const Map = dynamic<MapProps>(
  () => {
    return import('@/components/Map').then(mod => mod.Map);
  },
  {
    ssr: false,
  },
);

type Place = {
  id: string;
  name: string;
  slug: string;
  location: {
    latitude: number;
    longitude: number;
  };
};

type HomeTemplateProps = {
  places?: Place[];
};

export function HomeTemplate({ places }: HomeTemplateProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show my favorite spots in the world."
        canonical="https://my-trips.helitonoliveira.com.br" // Here you always put the origin URL
        openGraph={{
          url: 'https://my-trips.helitonoliveira.com.br',
          title: 'My Trips',
          description:
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            {
              url: '"https://my-trips.helitonoliveira.com.br"/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips',
            },
          ],
          site_name: 'My Trips',
        }}
      />
      <LinkWrapper href="/about">
        <InfoCircle />
      </LinkWrapper>
      <Map places={places} />
    </>
  );
}
