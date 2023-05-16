import * as S from "./styled";

function ListItem(props) {
  return (
    <S.Item>
      <S.Id>{props.id}</S.Id>
      <S.Name>{props.name}</S.Name>
      <S.Level>{props.level}</S.Level>
    </S.Item>
  );
}

export default ListItem;
