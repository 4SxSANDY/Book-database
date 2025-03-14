import React from 'react'
import "./Addbookform.css";

export const Addbookform = () => {
  return (
    <div> 
        <form>
            <label>
                <h2 className="Title">Title</h2>
                <input type="text" required placeholder="Enter your title name" />
            </label>
            <label>
                <h2 className="Description">Description</h2>
                <textarea type="text" required placeholder="Enter your description" row="4"></textarea>
            </label>
            <label>
            <h2 className="Author">Author</h2>
            <input type="text" required placeholder="Enter Author name" />
            </label>
            <label >
            <h2 className="Image url">Cover Image URL</h2>
            <input type="text" required placeholder="Give image URL" />
            </label>
        </form>
    </div>
  )
}
