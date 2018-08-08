import React, { Component } from 'react';
import styled from 'styled-components'
import img from './assets/images/painting.jpg'


const HeaderDiv = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
const Header = styled.header`
  display: flex;
  height: 10rem;
  color: white;
  font-size: 5rem;
  justify-content: center;
  align-items: center;
  text-shadow: 0 0.2rem 1rem grey;
`
const Categories = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff45;
  box-shadow: 0 0.2rem 1rem grey;
  margin-bottom: 3rem;
  @media (max-width: 800px) {
    justify-content: center;
    color: white;
  }
`

const Category = styled.button`
  background-color: transparent;
  height: 3rem;
  width: 11rem;
  color: white;
  font-size: 1.5rem;
  text-shadow: 0 0.2rem 1rem black;
  border: none;
  cursor: pointer;
`

const About = styled.section`
  margin-bottom: 2rem;
  width: 25%;
  display: flex;
  flex-direction: column;
  padding: 1rem 0 0 1rem;
  align-items: center;
`
const AboutTitle = styled.button`
  background: none;
  height: 3.5rem;
  width: 25%;
  text-shadow: 0 0.2rem 1rem black;
  color: white;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
`

const AboutPreview = styled.div`
  height: 50%;
  box-shadow: 0 0.2rem 1rem grey;
  font-size: 1.5rem;
  overflow: hidden;
  position: relative;
  padding: 0.5rem;
  background-color: #ffffff91;
  cursor: pointer;
  &:after {
    content: "";
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 2.5rem;
  }
`

const SuggestionButton = styled.button`
  background: none;
  height: 3.5rem;
  width: 100%;
  box-shadow: 0 0.2rem 1rem grey;
  margin-top: 1rem;
  font-size: 1.5rem;
  background-color: #ffffff91;
  cursor: pointer;
`

const RecentPostsTitle = styled.button`
  background: none;
  border: none;
  pointer-events: none;
  height: 3.8rem;
  text-shadow: 0 0.2rem 1rem black;
  color: white;
  font-size: 1.5rem;
  width: 75%;
  @media (max-width: 800px) {
    width: 100%;
  }
`

const RecentPostsContainer = styled.section`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  @media (max-width: 800px) {
    width: 100%;
  }
`

const RecentPost = styled.div`
  background: none;
  height: fit-content;
  max-height: 34%;
  box-shadow: 0 0.2rem 1rem grey;
  margin-top: 1rem;
  font-size: 1.5rem;
  padding: 0.5rem;
  width: -webkit-fill-available;
  overflow: -webkit-paged-x;
  position: relative;
  background-color: #ffffff91;
  &:after {
    content: "";
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 3rem;
  }
`

const Body = styled.div`
  display: flex;
  flex-direction: row;
`

const TitlesDiv = styled.div`
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
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget urna a enim aliquam sodales. Sed varius condimentum felis, eu porttitor nisi. Morbi dignissim maximus turpis, a posuere ante luctus sit amet. Nulla pellentesque vehicula felis non facilisis. Vivamus gravida diam quis elit sollicitudin, egestas semper quam suscipit. Curabitur accumsan ultricies maximus. Aenean eu leo vel magna congue mattis. Morbi eu suscipit sapien. Etiam sed vulputate mi, vestibulum posuere sem. Suspendisse potenti. Proin augue justo, vulputate vel laoreet eget, laoreet eleifend orci. Praesent et sapien lectus. Nunc sit amet molestie odio. sfgsf sfgsdfgsfg sfgsfghsf hjgkgjhkg fhfghjsdf qwefasdfasdfa adsfasdfasdf adfadsffhfygjf hmbnz adfasdfa adgfgxhgjh dgfghjfh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget urna a enim aliquam sodales. Sed varius condimentum felis, eu porttitor nisi. Morbi dignissim maximus turpis, a posuere ante luctus sit amet.',
        'Aliquam semper lacus at odio accumsan semper. In purus urna, lobortis sit amet orci id, auctor iaculis enim. Mauris metus turpis, accumsan at sapien eget, elementum vulputate ipsum. Nullam laoreet efficitur egestas. Integer id aliquam sem. Maecenas porttitor lobortis mauris sed mollis. Sed viverra et eros et fringilla. Sed auctor interdum magna quis auctor. Ut sed consequat lacus. Proin magna sem, scelerisque a malesuada ut, elementum id sapien. Quisque vel placerat lacus, vitae varius lectus. Praesent ut lacus sed elit ullamcorper mattis. Integer rutrum non leo ut molestie. Aliquam eget sem id ante sodales porta id id ligula. Praesent ut lacus sed elit ullamcorper mattis. Integer rutrum non leo ut molestie. Aliquam eget sem id ante sodales porta id id ligula. Praesent ut lacus sed elit ullamcorper mattis. Integer rutrum non leo ut molestie. Aliquam eget sem id ante sodales porta id id ligula. ',
        'Phasellus mauris ligula, maximus sit amet neque at, faucibus porttitor risus. Nunc laoreet eu sem sed sodales. Vestibulum fringilla sapien ac ultricies euismod. Nam gravida sit amet enim sed sodales. Curabitur egestas justo vitae cursus hendrerit. Phasellus et cursus urna. Vivamus pretium ultricies arcu, sit amet rhoncus est imperdiet ut. Donec nec pretium neque, id efficitur justo. Morbi felis arcu, congue at turpis id, mattis malesuada nulla. In vulputate augue massa, at hendrerit leo lobortis at. In vitae ante sapien. Quisque sed leo maximus, auctor neque in, iaculis nibh. Duis interdum a leo vitae iaculis. Sed aliquam hendrerit lectus, vel accumsan turpis commodo non. Sed aliquam hendrerit lectus, vel accumsan turpis commodo non. Sed aliquam hendrerit lectus, vel accumsan turpis commodo non. Sed aliquam hendrerit lectus, vel accumsan turpis commodo non. Sed aliquam hendrerit lectus, vel accumsan turpis commodo non.'
      ],
      screenWidth: window.innerWidth
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({screenWidth: window.innerWidth})
    })
  }

  renderCategories = () => {
    return this.state.screenWidth > 800
    ? this.state.categories.map((category, i) => {
      return <Category key={i}>{category}</Category>
    })
    : <Category>MENU</Category>
  }

  renderRecentPosts = () => {
    return this.state.recentPosts.map((post, i) => {
      return <RecentPost key={i}>{post}</RecentPost>
    })
  }

  shouldComponentUpdate() {
    return this.state.screenWidth !== window.innerWidth
  }

  render() {
    return (
      <div>
        <HeaderDiv>
          <Header>The Title</Header>
          <Categories>{this.renderCategories()}</Categories>
          <TitlesDiv>
            <RecentPostsTitle>Recent Posts</RecentPostsTitle>
            {window.innerWidth > 800 && <AboutTitle>About Me</AboutTitle>}
          </TitlesDiv>
        </HeaderDiv>
        <Body>
          <RecentPostsContainer>
            {this.renderRecentPosts()}
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
      </div>
    );
  }
}

export default App;
