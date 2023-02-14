import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, imageUrl, avatarUrl, author, topic, id} = blogDetails
  return (
    <Link className="blog-list" to={`/blogs/${id}`}>
      <div className="blog-box">
        <div>
          <img src={imageUrl} alt="" className="blog_img" />
        </div>
        <div className="blog_details_container">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author_avatar">
            <img src={avatarUrl} alt="" className="blog_avatar" />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
