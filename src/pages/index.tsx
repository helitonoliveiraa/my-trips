import { GetStaticProps } from 'next';

import { client } from '@/graphql/client';
import { HomeTemplate } from '@/template/Home';
import { GET_PLACES } from '@/graphql/queries';
import { GetPlacesQuery } from '@/graphql/generated/graphql';

type Place = {
  id: string;
  slug: string;
  name: string;
  location: {
    latitude: number;
    longitude: number;
  };
  description: {
    html: string;
  };
  gallery: {
    url: string;
    height: number;
    width: number;
  };
};

type HomeProps = {
  places?: Place[];
};

export default function Home({ places }: HomeProps) {
  return <HomeTemplate places={places} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES);

  console.log(JSON.stringify(places, null, 2));

  return {
    props: {
      places,
    },
  };
};
