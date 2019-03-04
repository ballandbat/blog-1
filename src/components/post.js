import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import TagsSummary from './tagsSummary'
import Navigation from './navigation'
import style from '../styles/post.module.css'
import Kofi from './kofi'

const Post = ({
  tags,
  title,
  date,
  path,
  coverImage,
  coverImageAlt,
  coverImageUrl,
  author,
  excerpt,
  html,
  previousPost,
  nextPost,
}) => {
  const previousPath = previousPost && previousPost.frontmatter.path
  const previousLabel = previousPost && previousPost.frontmatter.title
  const nextPath = nextPost && nextPost.frontmatter.path
  const nextLabel = nextPost && nextPost.frontmatter.title

  let coverImageContainer
  if (coverImage && coverImage.childImageSharp) {
    coverImageContainer = (
      <Img
        fluid={coverImage.childImageSharp.fluid}
        className={style.coverImage}
      />
    )
  } else if (coverImageUrl) {
    coverImageContainer = (
      <img
        src={coverImageUrl}
        className={style.coverImage}
        alt={coverImageAlt}
      />
    )
  }

  return (
    <div className={style.post}>
      <div className={style.postContent}>
        <h1 className={style.title}>
          {excerpt ? <Link to={path}>{title}</Link> : title}
        </h1>
        <div className={style.meta}>
          {date} {author && <>— Written by {author}</>}
        </div>
        {coverImageContainer}

        {excerpt ? (
          <>
            <p>{excerpt}</p>
            <Link to={path} className={style.readMore}>
              Read more →
            </Link>
          </>
        ) : (
          <>
            <div dangerouslySetInnerHTML={{ __html: html }} />

            <Kofi />
            <TagsSummary tags={tags} />
            <Navigation
              previousPath={previousPath}
              previousLabel={previousLabel}
              nextPath={nextPath}
              nextLabel={nextLabel}
            />
          </>
        )}
      </div>
    </div>
  )
}

Post.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  date: PropTypes.string,
  path: PropTypes.string,
  coverImage: PropTypes.object,
  coverImageAlt: PropTypes.string,
  coverImageUrl: PropTypes.string,
  author: PropTypes.string,
  excerpt: PropTypes.string,
  html: PropTypes.string,
  previousPost: PropTypes.object,
  nextPost: PropTypes.object,
}

export default Post
