import styled from "styled-components";

const MainContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const PostContainer = styled.div`
  margin-bottom: 20px;
  border: 1px solid #8d7b68;
  padding: 10px;
`;

const ViewCommentsLink = styled.p`
  color: #8d7b68;
  font-size: 24px;
`;

export default {
  MainContainer,
  PostContainer,
  ViewCommentsLink,
};
