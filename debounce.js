// Debounced Search Input

function DebouncedSearch() {
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    if (!query) return;

    const timer = setTimeout(() => {
      searchApi(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search..."
    />
  );
}
