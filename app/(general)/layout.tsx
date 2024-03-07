export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Hello Root Layout General</h1>
      {children}
    </div>
  );
}
