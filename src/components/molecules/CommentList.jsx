import Comment from './Comment';

export default function CommentList({ comments }) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Reviews ({comments.length})</h3>
      {comments.length > 0 ? (
        comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))
      ) : (
        <p>No reviews yet. Be the first to write one!</p>
      )}
    </div>
  );
}
