export const removesImportsAlreadyImported = <T = any>(
  object: any[],
  objectImport: any[],
  identifierImportedObject: 'id' | 'code' = 'id',
  nameImportedObject: 'name' | 'drawingCode' = 'drawingCode'
): T[] => {
  const importedIdsOrCodes = object
    .filter((floater) => floater?.reference && floater.mode === 'IMPORTED')
    .map((floater) => floater.reference.code?.trim());

  const importedNames = object
    .filter((floater) => floater?.reference && floater.mode === 'CREATED')
    .map((floater) => floater.name?.trim());

  return objectImport.filter((importItem) => {
    const itemIdentifier =
      typeof importItem[identifierImportedObject] === 'string'
        ? importItem[identifierImportedObject]?.trim()
        : importItem[identifierImportedObject].toString();
    const itemName = importItem[nameImportedObject]?.trim();

    return (
      !importedIdsOrCodes.includes(itemIdentifier) &&
      !importedNames.includes(itemName)
    );
  }) as T[];
};
