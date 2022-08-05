import styled from "styled-components";

const TitleTag = styled.div`
color:white;
font-family: "Helvetica Neue";
`
const SubTitleTag = styled.div`
color:white;
font-family: "Helvetica Neue";
font-size:3.5vw;
letter-spacing: 0.7vw;
`
const TitleTagType = styled.div`
font-family: "Helvetica Neue";
`

const SubTitleTagB = styled.div`
font-family: "Helvetica Neue";
font-size:3.5vw;
letter-spacing: 0.7vw;
color:black;

@media (max-width: 1000px) {
  font-size:5vw;
}

@media (max-width: 570px) {
  font-size:5vw;
}
`

// TAGS padronizadas




export {
    TitleTag,
    SubTitleTag,
    SubTitleTagB,
    TitleTagType
  };