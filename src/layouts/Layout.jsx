export default function Layout({ children }) {
  return (
    <>
      <main className="grid grid-cols-1">
        {children}
      </main>
    </>
  );
}
