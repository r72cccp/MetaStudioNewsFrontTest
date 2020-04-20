import React from 'react'
import { Dispatch } from 'redux'
import { Stats } from 'webpack'
import * as ApplicationPages from '@components/index'

export type AnyMap = {
  [key: string]: any
}

export type HashMap<T> = {
  [key: string]: T
}

export type EnumMap<K> = {
  [key in keyof K]: string
}

export type ApplicationPage = typeof React.Component & {
  fetchData?: (dispatch: Dispatch) => Promise<void>
}

export type ApplicationPageName = keyof typeof ApplicationPages

export type RouteParams = {
  absolute?: boolean
  domain?: string
  status?: number
}

export type PathSetting = {
  componentName?: string
  domain?: string
  hostname?: string
  key?: string
  locationRegexp?: string
  params?: RouteParams
  pathname?: string
}

export type PathSettings = {
  [key: string]: PathSetting
}

export type LocationInfoBrief = {
  hash: string
  hostname: string
  href: string
  origin?: string
  pathname: string
  protocol: string
  search: string
}

export type LocationInfo = LocationInfoBrief & {
  hashParams?: HashMap<string | number | AnyMap>
  pathnameParams?: HashMap<string | number | AnyMap>
  searchParams?: HashMap<string | number | AnyMap>
}

export type AppGlobal = NodeJS.Global & {
  locationInfoBrief: LocationInfoBrief
}

export type AppWindow = typeof window & typeof globalThis & {
  __PRELOADED_STATE__: string
  $REDUX_DEVTOOL: any
}

export interface MiddlewareRenderer extends Record<string, any> {
  clientStats: Stats
  serverStats: Stats
}

export type CookieOptions = {
  'maxAge'?: number
  'max-age'?: number
  'expires'?: string
  'path'?: string
}

export interface ICookieAdapter {
  get: (name: string) => string
  remove: (name: string) => void
  save: (name: string, value: string, options: CookieOptions) => void
}

export type ApiResponse = {
  [key: string]: any
}

export interface IFetchParams {
  userAuthToken?: string
}
