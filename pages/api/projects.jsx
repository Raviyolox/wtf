export default async (req, res) => {
  const data = [
    {
      id: 2,
      image: "https://cdn.discordapp.com/attachments/996782609709416538/1002252055844487178/th.jpeg",
      name: "Switch Client",
      description:
        "Switch Client .",
      link: "https://youtube.com/UmutBayraktarYT",
    },
  ];
  res.status(200).json(data);
};
