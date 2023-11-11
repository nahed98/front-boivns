import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};
    box-shadow: 0px 12px 18px -6px rgba(0,0,0,0.3)!important;
    padding: 20px;
    border:1px solid #d9d9d9;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  width:-webkit-fill-available;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
      flex-flow: row !important;
  justify-content: space-between ;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
font-weight: 700;
  font-size: 20px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: lowercase;
  color: #dcab6b;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;
