const groupByCategory = (crackers) => {
  return crackers.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});
};

export default groupByCategory;