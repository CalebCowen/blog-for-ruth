import React, { Component } from 'react';
import Menu from './Menu'
import HomePage from './HomePage'
import {Category} from '../assets/styles/GlobalStyles'
import {
  HeaderDiv,
  Header,
  Categories,
  ContentTitle,
  TitlesDiv
} from '../assets/styles/AppStyles'
import {AboutTitle} from '../assets/styles/HomePageStyles'

class App extends Component {
  constructor() {
    super()
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
      screenWidth: window.innerWidth,
      menuOpen: false,
      currentCategory: 'Recent Posts'
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({screenWidth: window.innerWidth})
    })
  }

  setCurrentCategory = (e) => {
    this.setState({currentCategory: e.target.value})
  }

  renderCategories = () => {
    return this.state.categories.map((category, i) => {
      return <Category onClick={(e) => this.setCurrentCategory(e)} key={i}>{category}</Category>
    })
  }

  toggleMenu = () => {
    let menuOpen = !this.state.menuOpen
    this.setState({menuOpen})
  }

  render() {
    return (
      <div>
        <HeaderDiv>
          <Header>The Title</Header>
          <Categories>
            {this.state.screenWidth > 800
            ? this.renderCategories()
            : <Menu
                toggleMenu={this.toggleMenu}
                open={this.state.menuOpen}
              >
                {this.renderCategories()}
              </Menu>
          }
          </Categories>
          <TitlesDiv>
              <ContentTitle>{this.state.currentCategory}</ContentTitle>
            {window.innerWidth > 800 &&
              this.state.currentCategory === 'Recent Posts' &&
              <AboutTitle>About Me</AboutTitle>}
          </TitlesDiv>
        </HeaderDiv>
        <HomePage toggled={this.state.currentCategory === 'Recent Post'} recentPosts={this.state.recentPosts}/>
      </div>
    );
  }
}

export default App;
