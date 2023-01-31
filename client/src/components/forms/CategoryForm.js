const CategoryForm =({handleDelete, value, setValue, submit, buttonText="Create", }) => {
     return (
        <div className="p-3" >
        <form onSubmit={submit}>
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Write Category Name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
         <div className="d-flex justify-content-between" >
         <button type="submit" className="btn btn-primary m-3">
            {buttonText}
          </button>
          {handleDelete && <button onClick={handleDelete} type="submit" className="btn btn-danger m-3">
            Delete
          </button>}

         </div>
        </form>
        </div>
     )
}

export default CategoryForm