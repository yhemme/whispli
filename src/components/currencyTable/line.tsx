import "./index.css";

type Props = {
  symbol?: string;
  highPrice?: string;
  lowPrice?: string;
};

const Line = ({ symbol, highPrice, lowPrice }: Props) => {
  return (
    <div className="currencyLine">
      <div>{symbol || "Symbol"}</div>
      <div>{highPrice || "High Price"}</div>
      <div>{lowPrice || "Low Price"}</div>
    </div>
  );
};

export default Line;
