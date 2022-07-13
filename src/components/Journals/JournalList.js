/* eslint-disable react/jsx-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from "react";

const JournalList = ({journalFetch}) => {
    return (
        <div className='blog-list'>
           {journalFetch.map((blog) => (
        <div className='blog-preview' key={blog.id}>
            <h2>{ blog.title }</h2>
            {blog.authors.map((author) => (
                <div>{author}</div>
            ))}
            <div>{blog.journaltype}</div>
            <div>{blog.published}</div>
            <div>{blog.issn}</div>
        </div>
       ))}
    </div>
    )
}

export default JournalList;