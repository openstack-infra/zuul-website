import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const DocsPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
        <section class="wrapper style1">
          <div class="container">
            <div class="row">
              <section class="6u 12u(narrower)">
                <div class="box post">
                  <div class="inner">
                    <h3><a href="https://zuul-ci.org/docs/zuul/">Zuul Documentation</a></h3>
                    <p>The complete user manual for Zuul.</p>
                  </div>
                </div>
              </section>
              <section class="6u 12u(narrower)">
                <div class="box post">
                  <div class="inner">
                    <h3><a href="https://zuul-ci.org/docs/nodepool/">Nodepool Documentation</a></h3>
                    <p>Nodepool is a companion program which supplies test resources to Zuul.</p>
                  </div>
                </div>
              </section>
            </div>
            <div class="row">
              <section class="6u 12u(narrower)">
                <div class="box post">
                  <div class="inner">
                    <h3><a href="https://zuul-ci.org/docs/zuul-jobs/">Zuul Jobs</a></h3>
                    <p>The zuul-jobs repo is a comprehensive library of pre-defined jobs available to any Zuul installation.</p>
                  </div>
                </div>
              </section>
              <section class="6u 12u(narrower)">
                <div class="box post">
                  <div class="inner">
                    <h3><a href="https://zuul-ci.org/docs/zuul-base-jobs/">Base Jobs</a></h3>
                    <p>The zuul-base-jobs repo provides the smallest set of jobs needed to get a Zuul up and running.</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
  )
}

DocsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const DocsPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <DocsPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

DocsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default DocsPage

export const docsPageQuery = graphql`
  query DocsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
