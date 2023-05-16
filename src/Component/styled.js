import styled from "styled-components";

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  padding-left: 20px;
  width: calc(100% - 20px);
  height: 30px;
  outline: none;
`;

export const Id = styled.span`
  position: absolute;
  left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 999px;
  background-color: #999999;
  color: #fff;
`;

export const Name = styled.span`
  position: absolute;
  left: 200px;
  font-weight: 900;
  font-size: 17px;
`;

export const Level = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 30px;
  background-color: #777777;
  right: 20px;
`;

export const ListItem = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #666666;
  color: #fff;
  border-radius: 3px;
  &:nth-child(2n + 1) {
    background-color: #444444;
  }
`;

export const Title = styled.h1`
  width: 100%;
  height: 55px;
  background-color: #444444;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  color: #fff;
  border-radius: 3px;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 3px;
  background-color: #333333;
  color: #fff;
  border: 0;
  font-weight: 700;
  transition: all 1s;
  &:hover {
    background-color: #111111;
  }
`;
