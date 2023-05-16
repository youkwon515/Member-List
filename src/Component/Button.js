import * as S from "./styled";
function Button({ idSort, levelSort, nameSort }) {
  return (
    <S.Buttons>
      <S.Button onClick={idSort}>아이디로 정렬</S.Button>
      <S.Button onClick={levelSort}>level로 정렬</S.Button>
      <S.Button onClick={nameSort}>이름으로 정렬</S.Button>
    </S.Buttons>
  );
}

export default Button;
