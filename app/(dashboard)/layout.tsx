import Sidebar from "@/components/Sidebar";
import { Separator } from "@/components/ui/separator";
import BreadcrumbHeader from "../../components/BreadcrumbHeader";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 min-h-screen">
        <header className="flex items-center justify-between px-6 py-4 h-[50px] container border-4 border-amber-500">
          <BreadcrumbHeader />
        </header>
        <Separator />
        <div className="overflow-auto border-4 border-amber-500">
          <div className="flex-1 container py-4 text-accent-foreground  border-4 border-amber-300">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
