declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    GRAPHQL_ENDPOINT: string;
    GRAPHQL_TOKEN: string;
    NEXT_PUBLIC_MAPBOX_API_KEY: string;
    NEXT_PUBLIC_MAPBOX_USERID: string;
    NEXT_PUBLIC_MAPBOX_STYLEID: string;
    NEXT_PUBLIC_GA_TRACKING: string;
  }
}
