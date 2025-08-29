export default function KaloriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="kalori-specific-styling">
      {children}
    </div>
  );
}