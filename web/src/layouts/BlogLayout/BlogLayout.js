import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return (
    <>
      <ul>
        <li>
          <Link to={routes.home()}>Home</Link>
          <Link to={routes.about()}>About</Link>
        </li>
      </ul>
      {children}
    </>
  )
}

export default BlogLayout
