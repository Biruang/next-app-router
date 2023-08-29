import { FC, JSX, PropsWithChildren } from 'react';

export type FCPWC<T = {}> = FC<PropsWithChildren<T>>;

export type THeaderLink = {
  name: string;
  href: EAppRoutes;
};
export enum EAppRoutes {
  MAIN = '/',
  BLOG = '/blog',
  ABOUT = '/about',
  PORTFOLIO = '/portfolio',
}
