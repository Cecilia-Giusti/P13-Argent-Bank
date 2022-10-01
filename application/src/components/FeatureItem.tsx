import { featureDataItem } from "../models";

type Props = {
  item: featureDataItem;
};

const FeatureItem: React.FunctionComponent<Props> = ({ item }: Props) => {
  return (
    <div className="feature-item">
      <img src={item.img} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{item.title}</h3>
      <p>{item.content}</p>
    </div>
  );
};

export default FeatureItem;
