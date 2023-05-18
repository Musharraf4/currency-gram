import { useState } from "react";

export default function useDragAndDrop() {
  const [dragOver, setDragOver] = useState(false);
  const [fileDropError, setFileDropError] = useState("")

   const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(true);
  };

  const onDragOver:any = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
  };

  return {
    dragOver,
    setDragOver,
    onDragEnter,
    onDragOver,
    onDragLeave,
    fileDropError,
    setFileDropError,
  };
}