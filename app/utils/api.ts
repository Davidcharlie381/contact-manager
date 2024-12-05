const data = [
  {
    name: "charles",
  },
  {
    name: "williams",
  },
  {
    name: "moses",
  },
];

export const getData = async () => {
  return new Promise<typeof data>((res) => {
    setTimeout(() => {
      res(data);
    }, 3000);
  });
};
