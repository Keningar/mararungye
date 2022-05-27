import { FC, GetLayout } from 'react';
import type {
  NextComponentType,
  NextPageContext,
  NextLayoutComponentType,
  GetServerSideProps,
} from 'next';
import type { AppProps } from 'next/app';

declare module 'react' {
  type GetLayout<P = {}> = (
    component: JSX.Element,
    props?: any
  ) => JSX.Element;

  type FCL<P = {}> = FC<P> & {
    getLayout?: GetLayout;
  };
}

declare module 'next' {
  type NextLayoutComponentType<P = {}> = NextComponentType<
    NextPageContext,
    any,
    P
  > & {
    getLayout?: GetLayout;
  };

  type NextLayoutPage<P = {}, IP = P> = NextComponentType<
    NextPageContext,
    IP,
    P
  > & {
    getLayout: GetLayout;
  };

  type GetServerSidePropsInitialStates<
    P extends { [key: string]: any } = { [key: string]: any }
  > = GetServerSideProps<{ initialApolloState?: any; layoutProps?: any } & P>;
}

declare module 'next/app' {
  type AppLayoutProps<P = {}> = AppProps & {
    Component: NextLayoutComponentType;
  };
}
