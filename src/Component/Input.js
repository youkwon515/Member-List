import * as S from "./styled";
function Input({ search }) {
  return <S.Input placeholder="이름을 입력해주세요!" onChange={search} />;
}

export default Input;
