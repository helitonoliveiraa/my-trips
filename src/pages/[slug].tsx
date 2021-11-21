import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { client } from 'graphql/client';

import { PageTemplate } from '@/template/Page';
import { GET_PAGES, GET_PAGE_BY_SLUG } from '@/graphql/queries';
import { GetPageBySlugQuery, GetPagesQuery } from '@/graphql/generated/graphql';

type Page = {
  id: string;
  slug: string;
  heading: string;
  body: {
    html: string;
  };
};

type AboutPros = {
  page: Omit<Page, 'id' | 'slug'>;
};

export default function About({ page }: AboutPros) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Carregando...</p>;
  }

  return <PageTemplate page={page} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { pages } = await client.request<GetPagesQuery>(GET_PAGES, {
    first: 3,
  });

  const paths = pages.map(({ slug }: Page) => {
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
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`,
  });

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
    },
  };
};
