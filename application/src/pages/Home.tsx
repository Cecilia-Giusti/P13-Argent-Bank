import FeatureItem from "../components/FeatureItem";
import Hero from "../components/Hero";
import { featureDataItem } from "../models";

const featureData: featureDataItem[] = [
  {
    name: "priority",
    img: "./img/icon-chat.png",
    title: "You are our #1 priority",
    content:
      " Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    name: "savings",
    img: "./img/icon-money.png",
    title: "More savings means higher rates",
    content:
      " The more you save with us, the higher your interest rate will be!",
  },
  {
    name: "security",
    img: "./img/icon-security.png",
    title: "Security you can trust",
    content:
      " We use top of the line encryption to make sure your data and money is always safe.",
  },
];

/**
 * Component to display the home page
 * @component
 * @return {JSX.Element}
 */
const Home: React.FC = (): JSX.Element => {
  return (
    <main>
      <div className="hero">
        <Hero />
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>

        {featureData.map((item, index) => {
          return <FeatureItem item={item} key={`${item.name}-${index}`} />;
        })}
      </section>
    </main>
  );
};

export default Home;
