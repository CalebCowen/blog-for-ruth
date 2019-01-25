import styled from 'styled-components'

export const About = styled.section`
  margin-bottom: 2rem;
  width: 25%;
  display: flex;
  flex-direction: column;
  padding: 1rem 0 0 1rem;
  align-items: center;
`
export const AboutTitle = styled.button`
  background: none;
  height: 3.5rem;
  width: 25%;
  text-shadow: 0 0.2rem 1rem black;
  color: white;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
`

export const AboutPreview = styled.div`
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

export const SuggestionButton = styled.button`
  background: none;
  height: 3.5rem;
  width: 100%;
  box-shadow: 0 0.2rem 1rem grey;
  margin-top: 1rem;
  font-size: 1.5rem;
  background-color: #ffffff91;
  cursor: pointer;
`
export const RecentPostsContainer = styled.section`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  @media (max-width: 800px) {
    width: 100%;
  }
`

export const RecentPost = styled.div`
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

export const Body = styled.div`
  display: flex;
  flex-direction: row;
`
