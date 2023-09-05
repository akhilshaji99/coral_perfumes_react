function SearchResult({results}) {
  return (
    <>
      {results.length > 0 && (
        <div className="list-group" style={{ display: "block" }}>
          {/* {results.map((result, index) => ( */}
          <a
            key={1}
            className="list-group-item list-group-item-action"
            //   onClick={() => {
            //     setQuery(result);
            //     setResults([]);
            //   }}
          >
            ghghg
          </a>
          {/* ))} */}
        </div>
      )}
    </>
  );
}
export default SearchResult;
