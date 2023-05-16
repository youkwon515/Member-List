import data from "./Data/Data";
import ListItem from "./Component/ListItem";
import Button from "./Component/Button";
import { useState } from "react";
import Title from "./Component/Title";
import * as S from "./Component/styled";
import Input from "./Component/Input";
function List() {
  const listitem = data.data;
  const [Sort, setSort] = useState(listitem);
  const onClickIdSort = () => {
    listitem.reverse();
    setSort([...listitem]);
  };

  const onClickLevelSort = () => {
    listitem.sort((a, b) => {
      if (a.level === undefined) {
        return -1;
      }
      if (b.level === undefined) {
        return 1;
      }
      if (a.level === b.level) {
        if (a.id > b.id) {
          return 1;
        } else {
          return -1;
        }
      }
      return b.level < a.level ? 1 : b.level > a.level ? -1 : 0;
    });

    setSort([...listitem]);
  };

  const onClickNameSort = () => {
    const firstName = listitem[0].name;
    firstName === "권준"
      ? listitem.sort((a, b) => {
          return a.name > b.name ? -1 : a.name < b.name ? 1 : 0;
        })
      : listitem.sort((a, b) => {
          return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        });

    setSort([...listitem]);
  };

  const onSearch = (e) => {
    const filters = listitem.filter(({ name }) =>
      name.includes(e.target.value)
    );
    setSort([...filters]);
  };

  return (
    <S.List>
      <Title>{data.title}</Title>
      <S.Contents>
        <Button
          levelSort={onClickLevelSort}
          idSort={onClickIdSort}
          nameSort={onClickNameSort}
        />
        <Input search={onSearch} />
      </S.Contents>

      <S.ListItem>
        {Sort.map(({ id, name, level }) => {
          return <ListItem key={id} id={id} name={name} level={level} />;
        })}
      </S.ListItem>
    </S.List>
  );
}

export default List;
