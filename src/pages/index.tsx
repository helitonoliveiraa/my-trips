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

export default function Home() {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoCircle />
      </LinkWrapper>
      <Map />
    </>
  );
}
