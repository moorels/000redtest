import { Link, routes } from '@redwoodjs/router'
import styles from './BlogLayout.module.css'
const BlogLayout = ({ children }) => {
  return (
    <>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link to={routes.home()}>Home</Link>
          <Link to={routes.about()}>About</Link>
        </li>
      </ul>
      {children}
    </>
  )
}

export default BlogLayout
