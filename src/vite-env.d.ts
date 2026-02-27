/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DONATION_PROVIDER?: string;
  readonly VITE_DONATION_GOAL?: string;
  readonly VITE_STREAMLABS_ACCESS_TOKEN?: string;
  readonly VITE_MANUAL_DONATION_AMOUNT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
