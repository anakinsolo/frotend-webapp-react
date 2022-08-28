const ResultMessage = ({ name, msg, noteId }) => {
  return (
    <div className={name}>
      {msg} {noteId}
    </div>
  );
};

export default ResultMessage;