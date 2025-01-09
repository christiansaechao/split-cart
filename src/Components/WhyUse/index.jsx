import "./styles.scss";

const WhyUse = () => {
  const whyUseGroup = [
    {
      src: "https://i.imgur.com/C0APBDJ.png",
      title: "Simplified Budgeting",
      description:
        "Easily manage expenses by dividing costs evenly among participants, ensuring everyone pays their fair share without the hassle of calculations and waiting for your friends to pay you back.",
    },
    {
      src: "https://i.imgur.com/vA7Pn3P.png",
      title: "Convenience",
      description:
        "Allows you to coordinate payments for shared expenses online. Each person can contribute their portion directly, saving time and eliminating confusion. Group booking should be convenient and easy. ",
    },
    {
      src: "https://i.imgur.com/1TDVIp0.png",
      title: "Fairness and Transparency",
      description:
        "Ensures transparency in group transactions by clearly delineating who owes what. This reduces misunderstandings and promotes trust among participants, so you can plan and purchase fairly.",
    },
    {
      src: "https://i.imgur.com/zMiVEgQ.png",
      title: "Flexibility",
      description:
        "Offers flexibility in how costs are divided, whether equally or proportionally based on each person’s share of the expense. This adaptability caters to various group dynamics and financial situations, ensuring individual costs are shared appropriately.",
    },
    {
      src: "https://i.imgur.com/AJY7kk6.png",
      title: "More Buying Power",
      description:
        "Simplifies the process of collecting funds and settling bills, allowing groups to focus on enjoying their shared experiences rather than managing finances. Allows you to understand exactly what you are purchasing within the group.",
    },
  ];
  return (
    <div className="why-use-container">
      {whyUseGroup.map((el) => {
        return (
          <div className="why-use-group">
            <img src={el.src} />
            <div className="group-title">
              <b>{el.title}</b>
            </div>
            <div className="group-description">{el.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default WhyUse;
