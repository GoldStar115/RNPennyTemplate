interface iConfigFeatures {
  showJourneys: boolean
  showChat: boolean
}

interface iConfigAuth {
  googleClientId: string
  agoraAppId: string
}

interface iConfigExternal {
  webUrl: string
  apiUrl: string
}

interface iConfig {
  features: iConfigFeatures
  auth: iConfigAuth
  external: iConfigExternal
}

import configRaw from '../../config/config.json'
export const Config: iConfig = configRaw

const validateConfiguration = () => {
  if (!Config.auth.googleClientId) {
    throw 'auth.googleClientId missing'
  }
  if (!Config.external.webUrl) {
    throw 'config.external.webUrl missing'
  }
  if (!Config.external.apiUrl) {
    throw 'config.external.apiUrl missing'
  }
  if (Config.features.showChat && !Config.auth.agoraAppId) {
    throw 'config.auth.agoraAppId missing'
  }
}

validateConfiguration()

export const URL_PREMIUM = `${Config.external.webUrl}/premium`
