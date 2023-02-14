import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogDetails: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const res = await fetch(`https://apis.ccbp.in/blogs/${id}`)

    const data = await res.json()

    const formattedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
    }
    this.setState({blogDetails: formattedData, isLoading: false})
  }

  render() {
    const {blogDetails, isLoading} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogDetails

    return (
      <div className="blog_info">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <>
            <h1 className="blog_title">{title}</h1>
            <div className="author_details">
              <img src={avatarUrl} alt="" className="author_pic" />
              <p className="author_name">{author}</p>
            </div>
            <img src={imageUrl} alt={title} className="blog_image" />
            <p className="blog_content">{content}</p>
          </>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
