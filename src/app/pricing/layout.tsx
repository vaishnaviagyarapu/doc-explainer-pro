import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Modern School Management ERP",
  description: "Transparent pricing for modern institutions. Choose between our Pilot or Annual plans with no hidden costs.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
