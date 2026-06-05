export default function SearchBar({ searchTerm, onChange }) {
  return (
    <>
      <div>
        <label htmlFor="seach-input">Search:</label>
        <input
          id="search-input"
          type="text"
          value={searchTerm}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
    </>
  );
}
