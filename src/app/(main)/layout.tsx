import SideMenu from "@/components/SideMenu/SideMenu";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-screen bg-indigo-300">
      <div>
        <SideMenu />
      </div>
      <main className="flex-1 overflow-auto bg-red-300">{children}</main>
    </div>
  );
};

export default MainLayout;
