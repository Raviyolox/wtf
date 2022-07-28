export default async (req, res) => {
  const data = [
    {
      id: 2,
      image: "https://cdn.discordapp.com/attachments/996782609709416538/1002252055844487178/th.jpeg",
      name: "Switch Client",
      description:
        "Switch Client inject hack build x64,x86.",
      link: "https://discord.gg/XZwJ9cByE2",
    },
  ];
  res.status(200).json(data);
};
