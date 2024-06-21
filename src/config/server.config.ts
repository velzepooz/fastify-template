export type IServerConfig = {
  port: number;
  host: string;
};

export const initServerConfig = () => ({
  port: +process.env.PORT || 3000,
  host: process.env.HOST || '0.0.0.0',
});
