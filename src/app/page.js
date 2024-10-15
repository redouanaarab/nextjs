// src/app/page.js
import Dashboard from "./dashboard/page";

export const metadata = {
  title: "Dashboard - MyApp",
  description: "Overview of your dashboard features and activities.",
};

export default function Home() {
  return <Dashboard />;
}
