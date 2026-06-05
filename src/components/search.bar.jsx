export default function SearchBar({searchTerm, onChange}) {
    return(
    <>
    <input type="text" value={searchTerm} onChange={onChange}/>
    </>);
}