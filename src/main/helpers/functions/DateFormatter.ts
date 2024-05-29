const ISOToDate = (iso) => {
  if (!iso) return undefined;
  const year = iso.slice(0, iso.indexOf('-'));
  const month = iso.slice(iso.indexOf('-') + 1, iso.lastIndexOf('-'));
  const day = iso.slice(iso.lastIndexOf('-') + 1, 10);

  return `${day}/${month}/${year}`;
};

export default ISOToDate;
export { ISOToDate };
