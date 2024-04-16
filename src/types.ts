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
}

export interface PluginOptionsTypes {
  /**
   * Enable or disable plugin
   * @default false
   */
  enabled?: boolean
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

export type Translations = {
  fields: {
    feedbackGroup: {
      fields: {
        submitLabel: {
          defaultValue: Record<Locale, string>
        }
        successMessage: {
          defaultValue: Record<Locale, string>
        }
        errorMessage: {
          defaultValue: Record<Locale, string>
        }
      }
    }
  }
}

export type Widths = {
  full: string
  half: string
  onequarter: string
  threequarter: string
  [key: string]: string
}
