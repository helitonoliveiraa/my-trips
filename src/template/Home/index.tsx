import dynamic from 'next/dynamic';
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
      <LinkWrapper href="/about">
        <InfoCircle />
      </LinkWrapper>
      <Map places={places} />
    </>
  );
}
