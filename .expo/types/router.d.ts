/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/_sitemap` | `/auth/create-password` | `/auth/forgot-password` | `/auth/signin` | `/auth/signup` | `/auth/splash-screen` | `/dashboard/dashboard-layout` | `/news-feed/news-and-feed` | `/profile/profile`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
