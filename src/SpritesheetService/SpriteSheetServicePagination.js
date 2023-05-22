import React from 'react';

const SpriteSheetServicePagination = ({ currentPage, setCurrentPage, spritesPerPage, totalSprites }) => {
  const totalPages = Math.ceil(totalSprites / spritesPerPage);

  const goToFirstPage = () => {
    setCurrentPage(0);
  };

  const goToLastPage = () => {
    setCurrentPage(totalPages - 1);
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="PaginationButtons">
      <button className="button-89" onClick={goToFirstPage} disabled={currentPage === 0}>
        First
      </button>
      <button onClick={goToPrevPage} disabled={currentPage === 0}>
        Previous
      </button>
      <button onClick={goToNextPage} disabled={(currentPage + 1) * spritesPerPage >= totalSprites}>
        Next
      </button>
      <button className="button-89" onClick={goToLastPage} disabled={(currentPage + 1) * spritesPerPage >= totalSprites}>
        Last
      </button>
    </div>
  );
};

export default SpriteSheetServicePagination;
