export default function SimpleButton({ text, onClick }) {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  );
}
