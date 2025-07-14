import { Outlet } from 'react-router-dom';
import ProfileSidebar from '../components/organisms/ProfileSidebar';
import ReadingStats from '../components/organisms/ReadingStats';

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-3">
          <ProfileSidebar />
        </div>
        <div className="md:col-span-9 space-y-8">
          <ReadingStats />
          <div className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-md">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
