import { useContext } from "react"
import { DataContext } from "../contexts/DataProvider"

export default function PostForm() {
    const { addPost } = useContext(DataContext)

    function handleSubmit(event) {
        event.preventDefault()
        console.log(event.target)
        const formData = new FormData(event.target)
        const title = formData.get('title')
        const body = formData.get('body')
        const brand = formData.get('brand')
        const model = formData.get('model')
        const color = formData.get('color')
        const year = formData.get('year')
        addPost(title, body, brand, model, color, year)
        event.target.reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group mb-5">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control bg-dark p-2 text-light bg-opacity-25 box border border-light rounded mb-5" name="title" />
            </div>
            <div className="form-group mb-5">
                <label htmlFor="body">Description</label>
                <input type="text" className="form-control bg-dark p-2 text-light bg-opacity-25 box border border-light rounded mb-5" name="body" />
            </div>
            <div className="form-group mb-5">
                <label htmlFor="brand">Brand</label>
                <input type="text" className="form-control bg-dark p-2 text-light bg-opacity-25 box border border-light rounded mb-5" name="brand" />
            </div>
            <div className="form-group mb-5">
                <label htmlFor="model">Model</label>
                <input type="text" className="form-control bg-dark p-2 text-light bg-opacity-25 box border border-light rounded mb-5" name="model" />
            </div>
            <div className="form-group mb-5">
                <label htmlFor="color">Color</label>
                <input type="text" className="form-control bg-dark p-2 text-light bg-opacity-25 box border border-light rounded mb-5" name="color" />
            </div>
            <div className="form-group mb-5">
                <label htmlFor="year">Year</label>
                <input type="text" className="form-control bg-dark p-2 text-light bg-opacity-25 box border border-light rounded mb-5" name="year" />
            </div>
            <button type="submit mb-5" className="btn bg-dark p-2 text-light bg-opacity-25 box border border-light rounded mb-5">Submit</button>
        </form>
    )
}