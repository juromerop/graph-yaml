import { useDraggable, useDroppable } from '@dnd-kit/core';
import { useState } from 'react';


const DraggableComponent = () => {
    const [isDragging, setIsDragging] = useState(false);
  
    const handleDragStart = () => {
      setIsDragging(true);
    };
  
    const handleDragEnd = () => {
      setIsDragging(false);
    };
  
    return (
      <div
        className="draggable"
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        {isDragging ? 'Arrastrando...' : 'Arrastre este componente'}
      </div>
    );
  };