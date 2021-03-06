import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const LinksPageTemplate = ({ displayName, backgroundColor, linkBackgroundColor, linkTextColor, links }) => {
  const style = {color: linkTextColor, backgroundColor: linkBackgroundColor}
  const renderedLinks = links.map((link) => <a href={link.node.frontmatter.link}><li style={{color: linkTextColor, backgroundColor: linkBackgroundColor}}>{link.node.frontmatter.title}</li></a>)
  return (
    <div style={{backgroundColor}} className="container">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="section">
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              {displayName}
            </h2>
            <ul>
              {renderedLinks}
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
  const { markdownRemark: post, allMarkdownRemark: links } = data
  const theLinks = links.edges
  

  return (
      <LinksPageTemplate
        displayName={post.frontmatter.displayName}
        backgroundColor={post.frontmatter.backgroundColor}
        linkBackgroundColor={post.frontmatter.linkBackgroundColor}
        linkTextColor={post.frontmatter.linkTextColor}
        links={theLinks}
      />
  )
}

LinksPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default LinksPage

export const linksPageQuery = graphql`
  query LinksPage($id: String!) {
    markdownRemark(id: { eq : $id }) {
      frontmatter {
            displayName
            backgroundColor
            linkBackgroundColor
            linkTextColor
          }
    }
    allMarkdownRemark(limit: 1000, filter: {frontmatter: {templateKey: {eq: "link"}}}) {
      edges {
        node {
          id
          frontmatter {
            title
            link
          }
        }
      }
    }
  }
`
