import styled from 'styled-components'
import img from '../images/painting.jpg'

export const HeaderDiv = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
export const Header = styled.header`
  display: flex;
  height: 10rem;
  color: white;
  font-size: 5rem;
  justify-content: center;
  align-items: center;
  text-shadow: 0 0.2rem 1rem grey;
`
export const Categories = styled.section`
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

export const ContentTitle = styled.button`
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

export const TitlesDiv = styled.div`
  display: flex;
  flex-direction: row;
`
