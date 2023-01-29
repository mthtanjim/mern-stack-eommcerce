const CategoryForm =({value, setValue, submit}) => {
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
          <button type="submit" className="btn btn-primary m-3">
            Create
          </button>
        </form>
        </div>
     )
}

export default CategoryForm