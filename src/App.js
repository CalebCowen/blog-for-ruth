import React, { Component } from 'react';
import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  background-color: #84f4cc;
  height: 10rem;
  color: white;
  font-size: 5rem;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0.2rem 1rem grey;
  text-shadow: 0 0.2rem 1rem grey;
`
const Categories = styled.section`
  display: flex;
  padding-top: 2rem;
  justify-content: space-between;
`

const Category = styled.button`
  background-color: #83f4cd;
  height: 3rem;
  width: 11rem;
  border-radius: 1rem;
  border-color: #83f4cd;
  font-size: 1.5rem;
  box-shadow: 0 0.2rem 1rem grey;
  text-shadow: 0 0.2rem 1rem grey;
  color: white;
`

const About = styled.section`
  margin: 2rem 0 2rem 0;
  width: fit-content;
  display: flex;
  flex-direction: column;
  padding: 1rem 0 0 1rem;
  align-items: center;
`
const AboutTitle = styled.button`
  background-color: #83f4cd;
  height: 3.5rem;
  width: 100%;
  box-shadow: 0 0.2rem 1rem grey;
  text-shadow: 0 0.2rem 1rem grey;
  color: white;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`

const AboutPreview = styled.div`
  background-color: #83f4cd;
  height: 50%;
  box-shadow: 0 0.2rem 1rem grey;
  color: black;
  font-size: 1.5rem;
  overflow: hidden;
  position: relative;
  &:after {
    content: "";
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 2.5rem;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(130, 244, 204, 2) 50%);
  }
`

const SuggestionButton = styled.button`
  background-color: #83f4cd;
  height: 3.5rem;
  width: 100%;
  box-shadow: 0 0.2rem 1rem grey;
  text-shadow: 0 0.2rem 1rem grey;
  color: white;
  margin-top: 1rem;
  font-size: 1.5rem;
`

const RecentPostsHeader = styled.button`
  background-color: #83f4cd;
  height: 3.8rem;
  box-shadow: 0 0.2rem 1rem grey;
  text-shadow: 0 0.2rem 1rem grey;
  color: white;
  font-size: 1.5rem;
  width: 100%;
`

const RecentPostsContainer = styled.section`
  margin: 2rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  align-items: center;
  width: 75%;
`

const RecentPost = styled.div`
  background-color: #83f4cd;
  height: 34%;
  box-shadow: 0 0.2rem 1rem grey;
  text-shadow: 0 0.2rem 1rem grey;
  color: white;
  margin-top: 1rem;
  font-size: 1.5rem;
  width: 100%;
  overflow: hidden;
  position: relative;
  &:after {
    content: "";
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 3rem;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(130, 244, 204, 2) 50%);
  }
`

const Body = styled.div`
  display: flex;
  flex-direction: row;
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [
        'Pregnancy',
        'Parenting',
        'Painting/Art',
        'Activities'
      ],
      recentPosts: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget urna a enim aliquam sodales. Sed varius condimentum felis, eu porttitor nisi. Morbi dignissim maximus turpis, a posuere ante luctus sit amet. Nulla pellentesque vehicula felis non facilisis. Vivamus gravida diam quis elit sollicitudin, egestas semper quam suscipit. Curabitur accumsan ultricies maximus. Aenean eu leo vel magna congue mattis. Morbi eu suscipit sapien. Etiam sed vulputate mi, vestibulum posuere sem. Suspendisse potenti. Proin augue justo, vulputate vel laoreet eget, laoreet eleifend orci. Praesent et sapien lectus. Nunc sit amet molestie odio. laksjdhflajhdlfkjahslkjdhflkajhsdlkjfhalkjshdfklhaslkjdhflkhaskldjfhlkahsdklfjalhsdfjldhqdfjh',
        'Aliquam semper lacus at odio accumsan semper. In purus urna, lobortis sit amet orci id, auctor iaculis enim. Mauris metus turpis, accumsan at sapien eget, elementum vulputate ipsum. Nullam laoreet efficitur egestas. Integer id aliquam sem. Maecenas porttitor lobortis mauris sed mollis. Sed viverra et eros et fringilla. Sed auctor interdum magna quis auctor. Ut sed consequat lacus. Proin magna sem, scelerisque a malesuada ut, elementum id sapien. Quisque vel placerat lacus, vitae varius lectus. Praesent ut lacus sed elit ullamcorper mattis. Integer rutrum non leo ut molestie. Aliquam eget sem id ante sodales porta id id ligula.',
        'Phasellus mauris ligula, maximus sit amet neque at, faucibus porttitor risus. Nunc laoreet eu sem sed sodales. Vestibulum fringilla sapien ac ultricies euismod. Nam gravida sit amet enim sed sodales. Curabitur egestas justo vitae cursus hendrerit. Phasellus et cursus urna. Vivamus pretium ultricies arcu, sit amet rhoncus est imperdiet ut. Donec nec pretium neque, id efficitur justo. Morbi felis arcu, congue at turpis id, mattis malesuada nulla. In vulputate augue massa, at hendrerit leo lobortis at. In vitae ante sapien. Quisque sed leo maximus, auctor neque in, iaculis nibh. Duis interdum a leo vitae iaculis. Sed aliquam hendrerit lectus, vel accumsan turpis commodo non.'
      ]
    }
  }
  renderCategories = () => {
    return this.state.categories.map((category, i) => {
      return <Category key={i}>{category}</Category>
    })
  }

  renderRecentPosts = () => {
    return this.state.recentPosts.map((post, i) => {
      return <RecentPost key={i}>{post}</RecentPost>
    })
  }
  render() {
    return (
      <div>
        <Header>The Title</Header>
        <Categories>{this.renderCategories()}</Categories>
        <Body>
          <RecentPostsContainer>
            <RecentPostsHeader>Recent Posts</RecentPostsHeader>
            {this.renderRecentPosts()}
          </RecentPostsContainer>
          <About>
            <AboutTitle>About Me</AboutTitle>
            <AboutPreview>
              Phasellus ut bibendum arcu. Nulla eu molestie nulla. In venenatis justo erat, a elementum nulla laoreet vitae. Vestibulum vel cursus tortor. Fusce quis odio massa. Sed dignissim sapien sed leo imperdiet, eu posuere mi rhoncus. Vestibulum eros velit, convallis ac velit vel, bibendum ornare augue. Cras placerat ligula quis vulputate aliquam. Pellentesque sollicitudin blandit lacus quis lobortis. Vestibulum ac maximus massa. Etiam id sapien ornare, luctus ex a, rhoncus neque. Maecenas lectus elit, vestibulum eu semper ut, luctus id velit.
            </AboutPreview>
            <SuggestionButton>Suggestions</SuggestionButton>
          </About>
        </Body>
      </div>
    );
  }
}

export default App;
