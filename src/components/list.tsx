import * as React from 'react';

interface ListProps {
  items: ItemProps[];
}
export const List: React.FC<ListProps> = ({ items }) => (
  <ul>{items.map(ListItem)}</ul>
);

interface ItemProps {
  id: string;
  title: string;
}
const ListItem: React.FC<ItemProps> = ({ id, title }) => (
  <li key={id}>{title}</li>
);
