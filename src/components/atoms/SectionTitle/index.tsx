import styled from "styled-components";
import Palette from "@/components/styles/Palette";

const Title = styled.h2`
  margin: 0;
  font-size: 1.5em;
  font-weight: 500;
  color: ${Palette.blue.main};
`;

type Props = {
  title: string;
};

const SectionTitle = ({ title }: Props) => {
  return <Title>{title}</Title>;
};

export default SectionTitle;
