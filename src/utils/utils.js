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
          name: entry.data.name,
          slug: entry.data.slug || entry.id,
          children: null,
          type: "file",
        };
      } else {
        // This is a directory
        if (!current[part]) {
          current[part] = {
            name: part.charAt(0).toUpperCase() + part.slice(1),
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
