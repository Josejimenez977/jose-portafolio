import styled from "styled-components";

export const ContainerContent = styled.div`
  width: 1100px;
  max-width: 100%;
  margin: 0 auto;
  padding: 20px 30px;
  background: linear-gradient(135deg, #b3e0ff, #ffffff); /* Soft pastel blue to white */

  @media (max-width: 768) {
    width: auto;
  }
`;
