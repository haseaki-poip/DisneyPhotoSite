import Palette from "@/components/styles/Palette";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${Palette.blue.main};
  color: #fff;
  font-weight: 700;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  padding: 24px 32px;
  text-align: center;
  &:hover {
    background-color: ${Palette.blue.sub};
  }
`;

export default Button;
