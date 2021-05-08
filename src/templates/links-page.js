import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const LinksPageTemplate = ({ displayName, backgroundColor, linkBackgroundColor, linkTextColor }) => {
  return (
    <div style={{backgroundColor}} className="container">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="section">
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              {displayName}
            </h2>
            <ul>
              <li style={{color: linkTextColor, backgroundColor: linkBackgroundColor}}>Escucha REVELACIÓN // Listen to REVELACIÓN</li>
              <li style={{color: linkTextColor, backgroundColor: linkBackgroundColor}}>Shop my Official Store</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

LinksPageTemplate.propTypes = {
  displayName: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  linkBackgroundColor: PropTypes.string.isRequired,
  linkTextColor: PropTypes.string.isRequired,
}

const LinksPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
      <LinksPageTemplate
        displayName={post.frontmatter.displayName}
        backgroundColor={post.frontmatter.backgroundColor}
        linkBackgroundColor={post.frontmatter.linkBackgroundColor}
        linkTextColor={post.frontmatter.linkTextColor}
      />
  )
}

LinksPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default LinksPage

export const linksPageQuery = graphql`
  query LinksPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        displayName
        backgroundColor
        linkBackgroundColor
        linkTextColor
      }
    }
  }
`
