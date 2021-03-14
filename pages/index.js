import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/widgets/index.js'
import QuizBackground from '../src/components/QuizBackground/index.js'
import Footer from '../src/components/footer/index.js'
import GitHubCorner from '../src/components/GitHubCorners/index.js'


// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;
 export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
 `;



export default function Home() {
  return (
  <QuizBackground backgroundImage={db.bg}>
    <QuizContainer>
      <Widget>
        <Widget.Header>
          <h1>de cima</h1>
        </Widget.Header>
        <Widget.Content>
          <p> oi</p>
        </Widget.Content>
      </Widget>  
      <Widget>
        <Widget.Content>
        <p> o1</p>
        </Widget.Content>
      </Widget> 
      <Footer />
    </QuizContainer>
    <GitHubCorner />
  </QuizBackground>
  )
}
