export const UseHighPoster = ({ poster }) => {
  const getHighPoster = (poster) => {
    return poster !== "N/A"
      ? poster.replace("SX300", "SX2000")
      : "/assets/images/poster-NotAvailable.png";
  };

  return <img src={getHighPoster(poster)} />;
};
