function generateUUID(quantity = 1): string[] {
  const uuidList: Set<string> = new Set([]);

  while (quantity > uuidList.size) {
    // @ts-ignore
    const newId = uuidv4();

    if (!uuidList.has(newId)) {
      uuidList.add(newId);
    }
  }

  return Array.from(uuidList);
}

export default generateUUID;
