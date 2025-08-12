export function buildFileTree(entries) {
  const tree = {};

  entries.forEach((entry) => {
    const pathParts = entry.id.split("/");
    let current = tree;

    pathParts.forEach((part, index) => {
      if (index === pathParts.length - 1) {
        // This is the file
        current[part] = {
          ...entry,
          name: part,
          children: null,
          type: "file",
        };
      } else {
        // This is a directory
        if (!current[part]) {
          current[part] = {
            name: part,
            type: "directory",
            children: {},
          };
        }
        current = current[part].children;
      }
    });
  });

  return tree;
}
