/**
 * Default options for the plugin
 *
 * @type {PluginOptionsTypes}
 * @property {boolean} enabled - Enable or disable plugin
 */
export const defaultPluginOptions: PluginOptionsTypes = {
  /**
   * Enable or disable plugin
   * @default false
   */
  enabled: false,
  adminGroup: undefined,
}

export interface PluginOptionsTypes {
  /**
   * Enable or disable plugin
   * @default false
   */
  enabled?: boolean

  /**
   * Admin group name
   * @default ''
   */
  adminGroup?: string | { [key: string]: string }
}

export type Locale =
  | 'de'
  | 'en'
  | 'fr'
  | 'es'
  | 'pt'
  | 'it'
  | 'nl'
  | 'ru'
  | 'ja'
  | 'zh'
  | 'pl'
  | 'sv'
  | 'cs'
  | 'tr'

export type Widths = {
  full: string
  half: string
  onequarter: string
  threequarter: string
  [key: string]: string
}
