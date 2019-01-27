import React from "react"
import {Helmet} from "react-helmet"
import {graphql, navigate} from "gatsby"
import ContentLayout from '../layouts/content-layout'
import Header from '../components/header';
import Search from '../app/modules/search/Search';
import AppContainer from '../components/AppContainer';
import {Box} from '@rebass/grid';
import Results from '../app/modules/results/Results';
import SEO from '../components/seo';
import Footer from '../components/Footer';

export default function Template(props) {
    debugger
    const {markdownRemark: post} = props.data
    return (
        <ContentLayout>
            <SEO title="SEO" keywords={[`gatsby`, `application`, `react`]}/>

            <Header siteTitle={'The Better Play'}>
                <Search/>
            </Header>

            <AppContainer py={4} width={1} justifyContent="center">
                <Box width={1}>
                    <h2>category preview lego</h2>
                    <Results
                        hideLoadMore={false}
                        itemsAmount={4}
                        searchParams={{
                        age_from: 0,
                        age_until: 1200,
                        q: 'lego'
                    }}
                        onSelectItem={(item) => navigate('/app/details', Object.assign({}, props.location.state, {
                        state: {
                            selectedItem: item
                        }
                    }))}/>

                    <div>
                        <h1>{post.frontmatter.title}</h1>
                        <div
                            dangerouslySetInnerHTML={{
                            __html: post.html
                        }}/>
                    </div>

                </Box>
            </AppContainer>
            <Footer/>
        </ContentLayout>
    )
}

export const pageQuery = graphql `
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`