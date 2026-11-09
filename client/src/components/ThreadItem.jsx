
// Import useAuth to access the currently logged-in user
import { useAuth } from "../auth/AuthContext.jsx";

// ThreadItem displays an individual thread and its controls
export default function ThreadItem({ thread }) {

  // Get the logged-in user from AuthContext
  const { user } = useAuth();

  // Check whether the logged-in user is the author of this thread
  const isAuthor = user?.userId === thread.authorId;

  // Check whether the logged-in user has admin privileges
  const isAdmin = user?.role === "admin";

  // Allow editing and deleting if the user is the author or an admin
  const canEdit = isAuthor || isAdmin;

  return (
    <article className="thread">

      {/* Display the thread title */}
      <h3>{thread.title}</h3>

      {/* Display the thread content */}
      <p>{thread.body}</p>

      {/* Display the thread author's name */}
      <p className="byline">by {thread.authorName}</p>

      {/* Show Edit and Delete buttons only to the author or admin */}
      {canEdit && (
        <div className="controls">
          <button>Edit</button>
          <button className="danger">Delete</button>
        </div>
      )}

    </article>
  );
}
