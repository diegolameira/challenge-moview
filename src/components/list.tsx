import * as React from 'react';

interface ListProps {
  items: ItemProps[];
  onOpen: (item: ItemProps) => void;
}
export const List: React.FC<ListProps> = ({ items, onOpen }) => {
  const [open, setOpen] = React.useState<number>();
  const handleClick = (item: ItemProps) => () => {
    setOpen(item.id);
    debugger;
    onOpen(item);
  };
  return (
    <ul>
      {items.map((item) => (
        <ListItem
          key={item.id}
          {...item}
          isOpen={item.id == open}
          onClick={handleClick(item)}
        />
      ))}
    </ul>
  );
};

interface ItemProps extends Movie {
  isOpen?: boolean;
  review?: string;
  onClick?: () => void;
}
const ListItem: React.FC<ItemProps> = ({
  id,
  title,
  year,
  'cover-url': coverUrl,
  url,
  score,
  isOpen,
  review,
  onClick,
}) => (
  <li onClick={onClick}>
    {`${score * 100}%`}
    <a href={url}>{title}</a>({year})
    {isOpen && (
      <div>
        <img src={coverUrl} />
        {review}
      </div>
    )}
  </li>
);
