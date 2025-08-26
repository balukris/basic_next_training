import Header from "../common/Header";
import Footer from "../common/Footer";

const RouteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="min-h-[90vh] bg-amber-950 py-4">{children}</div>
      <Footer />
    </>
  );
};

export default RouteLayout;
