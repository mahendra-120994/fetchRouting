import BlogList from '../BlogList/index'
import UserInfo from '../UserInfo/index'

import './index.css'

const Home = () => (
  <div className="home-container">
    <UserInfo />
    <BlogList />
  </div>
)

export default Home
