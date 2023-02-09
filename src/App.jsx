import './App.css';
import styled from 'styled-components';   // styled components를 import로 가져온다
import TestPage from './components/TestPage';
import GlobalStyle from './GlobalStyle';

const StContainer = styled.div`
  display: flex;
`;

const StyleBox = styled.div`    // 변수로 style을 지정할 수 있으며 "백틱"을 사용한다
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => props.borderColor};
  margin: 20px;
`;

// 박스의 색
const boxList = ['red', 'blue', 'green', "black"];

// 색을 넣으면. 이름을 반환
const getBoxName = (color) => {
  switch (color) {
    case 'red':
      return "빨간 박스";
    case 'green':
      return "초록 박스";
    case 'blue':
      return "파란 박스";
    default:
      return "검정 박스";
  }
}

function App() {
  return (
    // <StContainer>
    //   {/* <StyleBox borderColor="red">빨간 박스</StyleBox> */}
    //   {
    //     boxList.map((box) => {
    //       return <StyleBox borderColor={box}>{getBoxName(box)}</StyleBox>
    //     })
    //   }
    // </StContainer>
    <>
      <GlobalStyle />
      <TestPage
        title="제목입니다"
        contents="내용입니다"
      />
    </>
  );
}

export default App;
