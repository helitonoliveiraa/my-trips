import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { client } from 'graphql/client';

import { GET_PLACES, GET_PLACE_BY_SLUG } from '@/graphql/queries';
import {
  GetPlaceBySlugQuery,
  GetPlacesQuery,
} from '@/graphql/generated/graphql';
import { PlaceTemplate } from '@/template/Place';

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

type PlaceProps = {
  place: Place;
};

export default function Place({ place }: PlaceProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Carregando...</p>;
  }

  return <PlaceTemplate place={place} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    first: 3,
  });

  const paths = places.map(({ slug }) => {
    return {
      params: {
        slug,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<GetPlaceBySlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: `${params?.slug}`,
    },
  );

  if (!place) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      place,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
