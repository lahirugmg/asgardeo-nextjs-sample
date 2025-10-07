type AsgardeoConfig = {
  baseUrl: string;
  clientId: string;
  clientSecret: string;
  afterSignInUrl: string;
  preferences: {
    theme: {
      mode: "light" | "dark";
      inheritFromBranding: boolean;
    };
  };
};

const isValidUrl = (value: string | undefined) =>
  typeof value === "string" &&
  value.trim().length > 0 &&
  !value.includes("<") &&
  /^https?:\/\//.test(value.trim());

const hasValue = (value: string | undefined) =>
  typeof value === "string" && value.trim().length > 0 && !value.includes("<");

export const resolveAsgardeoConfig = (): AsgardeoConfig | null => {
  const baseUrl = process.env.NEXT_PUBLIC_ASGARDEO_BASE_URL;
  const clientId = process.env.NEXT_PUBLIC_ASGARDEO_CLIENT_ID;
  const clientSecret =
    process.env.ASGARDEO_CLIENT_SECRET ||
    process.env.NEXT_PUBLIC_ASGARDEO_CLIENT_SECRET;
  const afterSignInUrl =
    process.env.NEXT_PUBLIC_ASGARDEO_AFTER_SIGN_IN_URL || "http://localhost:3000";

  if (!isValidUrl(baseUrl) || !hasValue(clientId) || !hasValue(clientSecret)) {
    return null;
  }

  return {
    baseUrl: baseUrl.trim(),
    clientId: clientId.trim(),
    clientSecret: clientSecret.trim(),
    afterSignInUrl,
    preferences: {
      theme: {
        mode: "light",
        inheritFromBranding: false,
      },
    },
  };
};

export const isAsgardeoConfigured = () => resolveAsgardeoConfig() !== null;
