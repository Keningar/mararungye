import { FC, GetLayout } from "react";
import type {
  NextComponentType,
  NextPageContext,
  NextLayoutComponentType,
  GetServerSideProps,
} from "next";
import type { AppProps } from "next/app";

declare module "react" {
  type GetLayout<P = {}> = (component: JSX.Element, props?: any) => JSX.Element;

  type FCL<P = {}> = FC<P> & {
    getLayout?: GetLayout;
  };

  interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
    propTypes?: WeakValidationMap<P> | undefined;
    contextTypes?: ValidationMap<any> | undefined;
    defaultProps?: Partial<P> | undefined;
    displayName?: string | undefined;
  }
}

declare module "next" {
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

declare module "next/app" {
  type AppLayoutProps<P = {}> = AppProps & {
    Component: NextLayoutComponentType;
  };
}

declare module "auto-zustand-selectors-hook" {
  // from https://github.com/Albert-Gao/auto-zustand-selectors-hook/blob/master/src/index.ts
  type Hook<BaseType> = {
    [Key in keyof BaseType as `use${Capitalize<
      string & Key
    >}`]: () => BaseType[Key];
  };
}

declare module "@farfetch/react-carousel";
