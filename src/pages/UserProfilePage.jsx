import { useParams } from 'react-router-dom';
import useUserStore from '../store/userStore';
import { mockBooks } from '../lib/mockData'; // Assuming users are associated with books for now
import BookList from '../components/organisms/BookList';
import Button from '../components/atoms/Button';

// Mock user data for demonstration
const mockUsers = {
  '1': { id: 1, name: 'Jane Doe', bio: 'Lover of fantasy and historical fiction.', booksRead: [1, 6, 11] },
  '2': { id: 2, name: 'John Smith', bio: 'Sci-fi enthusiast and tech geek.', booksRead: [2, 3, 17] }
};

export default function UserProfilePage() {
  const { userId } = useParams();
  const { following, followUser, unfollowUser, user: currentUser } = useUserStore();
  
  const profileUser = mockUsers[userId];
  const isFollowing = following.includes(profileUser?.id);
  const isOwnProfile = currentUser?.id === profileUser?.id;

  const handleFollowToggle = () => {
    if (isFollowing) {
      unfollowUser(profileUser.id);
    } else {
      followUser(profileUser.id);
    }
  };

  if (!profileUser) {
    return <div className="text-center py-20">User not found.</div>;
  }

  const readBooks = mockBooks.filter(book => profileUser.booksRead.includes(book.id));

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
        <div className="w-32 h-32 rounded-full bg-primary text-white flex items-center justify-center text-5xl font-bold flex-shrink-0">
          {profileUser.name.charAt(0).toUpperCase()}
        </div>
        <div className="text-center md:text-left">
          <div className="flex items-center gap-4">
            <h1 className="text-4xl font-bold font-heading text-primary-dark dark:text-white">
              {profileUser.name}
            </h1>
            {!isOwnProfile && (
              <Button onClick={handleFollowToggle} variant={isFollowing ? 'secondary' : 'primary'}>
                {isFollowing ? 'Following' : 'Follow'}
              </Button>
            )}
          </div>
          <p className="text-lg text-text-muted-light dark:text-text-muted-dark mt-4 max-w-2xl">
            {profileUser.bio}
          </p>
          <div className="flex justify-center md:justify-start space-x-6 mt-4">
            <div><span className="font-bold">{readBooks.length}</span> Books Read</div>
            <div><span className="font-bold">{following.length}</span> Following</div>
            <div><span className="font-bold">128</span> Followers</div>
          </div>
        </div>
      </div>

      <BookList title={`${profileUser.name}'s Library`} books={readBooks} />
    </div>
  );
}
