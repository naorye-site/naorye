///<reference types="vite/client" />
interface ImportMetaEnv {
  readonly SANITY_PROJECTID: string
  readonly SANITY_DATASET: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}