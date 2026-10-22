import { useAuth } from "../auth/AuthContext.jsx";

export default function ThreadItem({ thread }) {
  const { user } = useAuth();

  const isAuthor = user?.userId === thread.authorId;
  const isAdmin = user?.role === "admin";
  const canEdit = Boolean(user && (isAuthor || isAdmin));

  return (
    <article className="thread">
      <h3>{thread.title}</h3>
      <p>{thread.body}</p>
      <p className="byline">by {thread.authorName}</p>

      {canEdit && (
        <div className="controls">
          <button type="button">Edit</button>
          <button type="button">Delete</button>
        </div>
      )}
    </article>
  );
}
