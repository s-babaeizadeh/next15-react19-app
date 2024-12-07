export default async function template({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="animate-appear">{children}</div>;
}
