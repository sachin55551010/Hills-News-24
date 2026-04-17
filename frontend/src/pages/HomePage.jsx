import { useEffect, useState } from "react";
import { axiosInstance } from "../api/axiosInstance";
import { NewsitemList } from "../ui/NewsitemList";
import { LoadingAnimation } from "../ui/LoadingAnimation";
import { Link, useSearchParams } from "react-router-dom";
import { PaginationButton } from "../ui/PaginationButton";
import { FollowBtn } from "../components/FollowBtn";
export const HomePage = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const totalPosts = allPosts?.total_posts;

  const page = parseInt(searchParams.get("page")) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;
  // console.log(skip);

  const getAllPosts = async () => {
    setIsLoading(true);
    try {
      const res = await axiosInstance.get(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/facebook-posts`,
        {
          params: {
            skip,
            limit,
          },
        },
      );
      // console.log(res.data);
      setAllPosts(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant", // optional
    });
    getAllPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div>
      {/* header */}
      <div className="flex items-center justify-between px-5 py-3 bg-base-200">
        {/* Branding */}
        <h1
          style={{
            margin: 0,
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontWeight: 700,
            fontSize: "1.2rem",
            letterSpacing: "0.03em",
            color: "#f8fafc",
          }}
        >
          Hills{" "}
          <span style={{ color: "#ef4444", fontStyle: "italic" }}>News</span>{" "}
          <span
            style={{
              fontSize: "0.8rem",
              fontFamily: "'Courier New', monospace",
              fontWeight: 400,
              color: "rgba(248,250,252,0.4)",
            }}
          >
            24
          </span>
        </h1>

        <FollowBtn />
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-2">
          {/* item list div and loading screen if list is empty */}
          <div>
            {isLoading && allPosts.length === 0 ? (
              <div className="mt-10">
                <LoadingAnimation />
              </div>
            ) : (
              <NewsitemList allPosts={allPosts} />
            )}
          </div>
          <PaginationButton
            page={page}
            totalPosts={totalPosts}
            setSearchParams={setSearchParams}
          />
        </div>

        {/* ad section */}
        <div className="flex-1 bg-base-300/30 mt-8 rounded p-4">Ad section</div>
      </div>
    </div>
  );
};
