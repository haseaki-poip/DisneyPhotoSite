import Palette from "@/components/styles/Palette";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  padding: 24px 0;
`;

const Message = styled.p`
  color: ${Palette.gray.main};
  text-align: center;
`;

type Props = {
  message: string;
  actionContent?: React.ReactNode;
  className?: string;
};

const ErrorMessage = ({ message, actionContent, className }: Props) => {
  return (
    <Container className={className}>
      <Message>{message}</Message>
      {actionContent}
    </Container>
  );
};

export default ErrorMessage;
