export const InputField = ({ text, handleInput, handleSubmit }) => {
   return (
      <label>
         <input value={text} onChange={(e) => handleInput(e.target.value)} />
         <button className="btn btn-success m-3" onClick={handleSubmit}>Add Todo</button>
      </label >
   )
}