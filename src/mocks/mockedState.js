exports.getState = () => {
  return [
    {
      id: 1,
      text: "TEXT_1",
      important: false,
      starred: false,
      completed: true,
      editing: false
    },
    {
      id: 2,
      text: "TEXT_2",
      important: false,
      starred: false,
      completed: false,
      editing: false
    },
    {
      id: 3,
      text: "TEXT_3",
      important: true,
      starred: true,
      completed: false,
      editing: true
    }
  ];
};
