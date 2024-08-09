import { useState } from 'react';

export const useTabs = (initialIndex, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) return;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};