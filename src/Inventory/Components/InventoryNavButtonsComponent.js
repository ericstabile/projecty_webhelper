import React, { useEffect, useState } from "react";

const InventoryNavButtonsComponent = ({ page, pageCount, setPageHandler }) => {
  const [currentPage, setCurrentPage] = useState(page);
  const [numberOfPages, setNumberOfPages] = useState(pageCount);

  const updatePage = (newPageIdx) => {
    setPageHandler(newPageIdx);
  };

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  useEffect(() => {
    setNumberOfPages(pageCount);
  }, [pageCount]);

  return (
    <div className="inventory-inventory-nav-buttons">
      <button
        className="inventory-inventory-previous-button"
        onClick={() => updatePage(currentPage - 1)}
        disabled={currentPage === 0}
      >
        Previous
      </button>
      <button
        className="inventory-inventory-next-button"
        onClick={() => updatePage(currentPage + 1)}
        disabled={currentPage === numberOfPages - 1}
      >
        Next
      </button>
    </div>
  );
};

export default InventoryNavButtonsComponent;
