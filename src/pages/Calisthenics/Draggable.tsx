import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';
import {ReactNode} from 'react';

interface DraggableProps {
  id: string;
  children: ReactNode;
}

export function Draggable({id, children}: DraggableProps) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: id,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </button>
  );
}

