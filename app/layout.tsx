import "./globals.css";

export const metadata = {
  title: "Inspyr Education",
  description: "Free GCSE & A-Level learning platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
