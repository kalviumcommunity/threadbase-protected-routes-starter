// components/ThreadItem.jsx
// ────────────────────────────────────────────────────────────
// Show Edit / Delete only to the thread's author or an admin.
// ────────────────────────────────────────────────────────────
import { useAuth } from "../auth/AuthContext.jsx";

export default function ThreadItem({ thread }) {
  const { user } = useAuth();

  const canEdit = user?.userId === thread.authorId || user?.role === "admin";

  return (
    <article className="thread">
      <h3>{thread.title}</h3>
      <p>{thread.body}</p>
      <p className="byline">by {thread.authorName}</p>
      {canEdit && (
        <div className="controls">
          <button>Edit</button>
          <button className="danger">Delete</button>
        </div>
      )}
    </article>
  );
}
