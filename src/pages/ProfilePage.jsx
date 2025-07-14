import { Outlet } from 'react-router-dom';
import ProfileSidebar from '../components/organisms/ProfileSidebar';

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-3">
          <ProfileSidebar />
        </div>
        <div className="md:col-span-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
