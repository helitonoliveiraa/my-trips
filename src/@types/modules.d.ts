declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    GRAPHQL_ENDPOINT: string;
    GRAPHQL_TOKEN: string;
  }
}
