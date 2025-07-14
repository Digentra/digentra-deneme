export default function ReadingStats() {
  // Mock data for demonstration
  const stats = {
    booksRead: 12,
    hoursListened: 45,
    yearlyGoal: 50,
  };

  const goalProgress = (stats.booksRead / stats.yearlyGoal) * 100;

  return (
    <div className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4">Your Reading Stats</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="text-center">
          <p className="text-4xl font-extrabold text-primary">{stats.booksRead}</p>
          <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Books Read This Year</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-extrabold text-primary">{stats.hoursListened}</p>
          <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Hours Listened</p>
        </div>
      </div>
      <div className="mt-6">
        <h4 className="font-semibold">Yearly Goal: {stats.yearlyGoal} Books</h4>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mt-2">
          <div 
            className="bg-secondary h-4 rounded-full" 
            style={{ width: `${goalProgress}%` }}
          ></div>
        </div>
        <p className="text-right text-sm mt-1">{Math.round(goalProgress)}% Complete</p>
      </div>
    </div>
  );
}
