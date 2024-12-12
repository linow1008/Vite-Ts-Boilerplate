import { Outlet } from 'react-router-dom';


type LayoutProps = {
  
};

const Layout = ( props : LayoutProps) => {
  


  return (
    <div>
      {/* {renderHeader()} */}
      <SidebarProvider>
        {/* {renderSidebar()} */}
        <main className="w-full">
          <SidebarTrigger />
          <Outlet />
        </main>
      </SidebarProvider>
      {/* {renderFooter()} */}
    </div>
  );
};

export default Layout;
