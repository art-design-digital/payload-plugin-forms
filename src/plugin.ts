import type { Config, Plugin } from 'payload/config'
import { defaultPluginOptions, PluginOptionsTypes } from './types'
import deepmerge from './utils/deepmerge'
import Forms from './collections/Forms'

export const formPlugin =
  (userPluginOptions?: PluginOptionsTypes): Plugin =>
  incomingConfig => {
    const pluginOptions = deepmerge(defaultPluginOptions, userPluginOptions || {})
    let config = { ...incomingConfig }

    // If the plugin is disabled, return the config as is
    if (pluginOptions?.enabled === false) {
      return config
    }

    config.collections = [...(config.collections || []), Forms]

    return config
  }
