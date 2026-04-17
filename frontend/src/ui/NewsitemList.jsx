import { Link } from "react-router-dom";
import logo from "../assets/newLogo.png";
export const NewsitemList = ({ allPosts }) => {
  console.log("All posts", allPosts);

  return (
    <ul className="grid lg:grid-cols-2 gap-5 min-h-dvh p-3 mt-4">
      {allPosts?.data?.map((post) => (
        <li
          key={post._id}
          className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
        >
          {/* Badge for post index */}
          <figure className="relative aspect-video overflow-hidden">
            <img
              src={post.full_picture || logo}
              alt="news"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-base-300/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Category badge */}
            <div className="absolute top-3 left-3">
              <span className="badge badge-error">Local</span>
            </div>
          </figure>

          <div className="card-body p-4 gap-3">
            {/* Message text */}
            <p className="text-sm font-medium text-base-content/80 line-clamp-2 leading-relaxed">
              {post.message}
            </p>

            {/* Footer row */}
            <div className="card-actions justify-between items-center mt-1">
              <div className="text-base-content/40">
                {new Date(post.created_time).toLocaleString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>

              <a
                href={post.permalink_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary btn-xs rounded-full px-4 gap-1.5 font-semibold">
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
