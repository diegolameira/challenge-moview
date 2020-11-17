import * as React from 'react';

interface ListProps {
  items: ItemProps[];
}
export const List: React.FC<ListProps> = ({ items }) => (
  <ul>{items.map(ListItem)}</ul>
);

interface ItemProps extends Movie {}
const ListItem: React.FC<ItemProps> = ({ id, title, year, url }) => (
  <li key={id}>
    <a href={url}>{title}</a>({year})
  </li>
);
