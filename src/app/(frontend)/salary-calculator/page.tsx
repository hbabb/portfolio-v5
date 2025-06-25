import { SalaryCalculator } from "@/app/(frontend)/salary-calculator/salaryCalculator";

export const metadata = {
  title: "Salary Calculator",
  description:
    "Instantly convert your salary between yearly, monthly, hourly, and weekly rates. Includes real-time currency conversion using up-to-date exchange rates.",
  keywords: [
    "salary calculator",
    "hourly to yearly",
    "monthly to yearly",
    "income converter",
    "pay calculator",
    "currency conversion",
    "USD salary calculator",
    "freelancer pay estimate",
  ],
};

export default function SalaryCalculatorPage() {
  return (
    <div
      className="flex min-h-dvh flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/blueCloudBackground.jpg)" }}
    >
      <SalaryCalculator />
    </div>
  );
}
