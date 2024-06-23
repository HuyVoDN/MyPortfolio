import { Fade } from 'react-awesome-reveal';
import { Typography } from '@mui/material';
import { Draggable } from './Draggable';
import { Droppable } from './Droppable';
import { useState } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core'

const Calisthenics = () => {

  const [parent, setParent] = useState<string | null>(null);
const draggable = (
  <Draggable id="draggable">
    Front Lever
  </Draggable>
);
  function handleDragEnd({over} : DragEndEvent) {
    setParent(over && typeof over.id === 'string' ? over.id : null);
  }
  return (
    <div className="calisthenics">
      <Fade>
        <Typography variant='h4' className="title">Calisthenics</Typography>
      </Fade>
      <div className="calisthenics-container">
        <DndContext onDragEnd={handleDragEnd}>
          {!parent ? draggable : null}
          <Droppable id="droppable">
            {parent === "droppable" ? draggable : 'Drop here'}
          </Droppable>
        </DndContext>
      </div>
    </div>
  )
}

export default Calisthenics