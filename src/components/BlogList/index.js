import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem/index'
import './index.css'

class BlogList extends Component {
  state = {blogData: [], isLoadig: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const res = await fetch('https://apis.ccbp.in/blogs')
    console.log(res)

    const data = await res.json()

    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({blogData: formattedData, isLoadig: false})
  }

  render() {
    const {blogData, isLoadig} = this.state
    return (
      <div className="blog-container">
        {isLoadig ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogData.map(blogDetails => (
            <BlogItem key={blogDetails.id} blogDetails={blogDetails} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
