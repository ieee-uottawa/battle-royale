// Donation Service - Supports multiple platforms
export interface DonationData {
  current: number;
  goal: number;
  currency: string;
}

type DonationProvider = "streamlabs" | "manual";

const PROVIDER = (import.meta.env.VITE_DONATION_PROVIDER ||
  "manual") as DonationProvider;
const GOAL = parseFloat(import.meta.env.VITE_DONATION_GOAL || "1000");

/**
 * Fetch donations from Streamlabs
 */
async function fetchStreamlabsDonations(): Promise<DonationData> {
  const accessToken = import.meta.env.VITE_STREAMLABS_ACCESS_TOKEN;

  if (!accessToken) {
    console.warn("Streamlabs access token not configured");
    return { current: 0, goal: GOAL, currency: "CAD" };
  }

  try {
    const response = await fetch(
      `https://streamlabs.com/api/v1.0/donations?access_token=${accessToken}&limit=100`,
    );

    if (!response.ok) {
      throw new Error(`Streamlabs API error: ${response.status}`);
    }

    const data = await response.json();
    const total =
      data.data?.reduce((sum: number, donation: any) => {
        return sum + parseFloat(donation.amount || 0);
      }, 0) || 0;

    return {
      current: total,
      goal: GOAL,
      currency: "CAD",
    };
  } catch (error) {
    console.error("Error fetching Streamlabs donations:", error);
    return { current: 0, goal: GOAL, currency: "USD" };
  }
}

/**
 * Manual mode - reads from environment variable
 */
function getManualDonations(): DonationData {
  const current = parseFloat(
    import.meta.env.VITE_MANUAL_DONATION_AMOUNT || "0",
  );

  return {
    current,
    goal: GOAL,
    currency: "CAD",
  };
}

/**
 * Main function to fetch donation data based on configured provider
 */
export async function fetchDonationData(): Promise<DonationData> {
  console.log(`Fetching donations from provider: ${PROVIDER}`);

  switch (PROVIDER) {
    case "streamlabs":
      return fetchStreamlabsDonations();

    case "manual":
    default:
      return getManualDonations();
  }
}

/**
 * Format currency for display
 */
export function formatCurrency(
  amount: number,
  currency: string = "CAD",
): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
