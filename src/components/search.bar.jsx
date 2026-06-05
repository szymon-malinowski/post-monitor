export default function SearchBar({ searchTerm, onChange }) {
  return (
    <>
      <div>
        <label htmlFor="seach-input">Search:</label>
        <input
          className="input"
          id="search-input"
          type="text"
          placeholder="word"
          value={searchTerm}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
    </>
  );
}
