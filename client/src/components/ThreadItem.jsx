// components/ThreadItem.jsx
// ────────────────────────────────────────────────────────────
// TASK 4: show Edit / Delete ONLY when the logged-in user wrote this thread
//   (an ownership check) — or is an admin.
//   - const isAuthor = user?.userId === thread.authorId;   // ownership
//   - const isAdmin  = user?.role === "admin";             // role
//   - const canEdit  = isAuthor || isAdmin;
// Right now `canEdit` is hard-coded to true, so the controls show for EVERYONE
// (even logged-out visitors). Fix that.
// ────────────────────────────────────────────────────────────
import { useAuth } from "../auth/AuthContext.jsx";

export default function ThreadItem({ thread }) {
  const { user } = useAuth();

  const isAuthor = user?.userId === thread.authorId;
  const isAdmin = user?.role === "admin";
  const canEdit = isAuthor || isAdmin;

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
