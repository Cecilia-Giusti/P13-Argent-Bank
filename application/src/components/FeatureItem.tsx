import { featureDataItem } from "../models";

type Props = {
  item: featureDataItem;
};

/**
 * Component to display a banking service
 * @component
 * @param {featureDataItem} item - banking servive
 * @return {JSX.Element}
 */
const FeatureItem: React.FunctionComponent<Props> = ({
  item,
}: Props): JSX.Element => {
  return (
    <div className="feature-item">
      <img src={item.img} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{item.title}</h3>
      <p>{item.content}</p>
    </div>
  );
};

export default FeatureItem;
