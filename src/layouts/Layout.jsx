import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="grid grid-cols-1">
        {children}
      </main>
    </>
  );
}
