import { Outlet } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';


const Layout = () => {

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
