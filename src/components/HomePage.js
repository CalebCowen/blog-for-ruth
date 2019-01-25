import React, { Component } from 'react';
import {
  About,
  AboutPreview,
  SuggestionButton,
  RecentPostsContainer,
  RecentPost,
  Body
} from '../assets/styles/HomePageStyles'

export default const HomePage = ({recentPosts, toggled}) => {
  const renderRecentPosts = () => {
    return this.props.recentPosts.map((post, i) => {
      return <RecentPost key={i}>{post}</RecentPost>
    })
  }
  return (
      <Body>
        <RecentPostsContainer>
          {renderRecentPosts()}
        </RecentPostsContainer>
        {window.innerWidth > 800 &&
          <About>
            <AboutPreview>
              Phasellus ut bibendum arcu. Nulla eu molestie nulla. In venenatis justo erat, a elementum nulla laoreet vitae. Vestibulum vel cursus tortor. Fusce quis odio massa. Sed dignissim sapien sed leo imperdiet, eu posuere mi rhoncus. Vestibulum eros velit, convallis ac velit vel, bibendum ornare augue. Cras placerat ligula quis vulputate aliquam. Pellentesque sollicitudin blandit lacus quis lobortis. Vestibulum ac maximus massa. Etiam id sapien ornare, luctus ex a, rhoncus neque. Maecenas lectus elit, vestibulum eu semper ut, luctus id velit.
            </AboutPreview>
            <SuggestionButton>Suggestions</SuggestionButton>
          </About>
        }
      </Body>
  )
}
