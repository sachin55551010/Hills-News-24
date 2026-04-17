export const PaginationButton = ({ page, totalPosts, setSearchParams }) => {
  const totalPages = Math.ceil(totalPosts / 10);

  const changePage = (p) => {
    setSearchParams({ page: p });
  };

  const getPages = () => {
    const pages = [];

    if (page <= 3) {
      for (let i = 1; i <= Math.min(4, totalPages); i++) {
        pages.push(i);
      }
    } else if (page >= totalPages - 2) {
      for (let i = totalPages - 3; i <= totalPages; i++) {
        if (i > 0) pages.push(i);
      }
    } else {
      pages.push(page - 1, page, page + 1);
    }

    return pages;
  };

  const pages = getPages();

  return (
    <div className="flex justify-center gap-2 my-6">
      {page > 1 && (
        <button
          className="btn btn-soft btn-primary"
          onClick={() => changePage(page - 1)}
        >
          Previous
        </button>
      )}

      {page > 3 && (
        <>
          <button
            className="btn btn-soft btn-primary"
            onClick={() => changePage(1)}
          >
            1
          </button>
          <span>...</span>
        </>
      )}

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => changePage(p)}
          className={`btn ${p === page ? "btn-primary" : "btn-soft btn-primary"}`}
        >
          {p}
        </button>
      ))}

      {page < totalPages - 2 && (
        <>
          <span>...</span>
          <button
            className="btn btn-soft btn-primary"
            onClick={() => changePage(totalPages)}
          >
            {totalPages}
          </button>
        </>
      )}

      {page < totalPages && (
        <button
          className="btn btn-soft btn-primary"
          onClick={() => changePage(page + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
};
