import SideBar from './SideBar';
import NavBar from './NavBar';

function LayoutPage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div>
      <NavBar />
      <div style={{ display: 'flex' }}>
        <SideBar />
        <main>{children}</main>
      </div>
    </div>
  );
}

export default LayoutPage;