// components/ThreadItem.jsx

import { useAuth } from "../auth/AuthContext.jsx";

export default function ThreadItem({ thread }) {
  const { user } = useAuth();

  // Check whether the logged-in user wrote this thread
  const isAuthor = user?.userId === thread.authorId;

  // Check whether the logged-in user is an admin
  const isAdmin = user?.role === "admin";

  // Allow editing and deleting only for the author or an admin
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