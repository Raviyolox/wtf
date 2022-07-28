export default async (req, res) => {
  const data = [
    {
      id: 2,
      image: "https://media.discordapp.net/attachments/737348411568685066/999563078079361074/YT_AVATAR_NET.jpg",
      name: "Youtube",
      description:
        "Javascript builder and developer.",
      link: "https://youtube.com/UmutBayraktarYT",
    },
  ];
  res.status(200).json(data);
};
