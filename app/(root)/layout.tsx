import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";


export default function RootLayout({children,}:{children: React.ReactNode;}) {
    return (
      <div className="flex h-screen flex-col">
      {/* h-screen is used for full height */}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>  
    );
}