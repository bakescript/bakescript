const File = {
  read(path) {
    return Bun.file(path).text();
  },
};

export { File };
