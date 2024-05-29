export const mapOptions = (items) => {
  return items.map((item) => {
    return { label: item.name, value: item.id };
  });
};
