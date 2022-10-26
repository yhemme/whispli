import { CurrencyType } from "../../models/currencyType";
import Line from "./line";

type Props = {
  currencies: CurrencyType[];
};

const CurrencyTable = ({ currencies }: Props) => {
  return (
    <div>
      <div className="currencyTable">
        <Line key="currencyTableHeader"/>
        {currencies.map((currency, index) => (
          <Line {...currency} key={index.toString()} />
        ))}
      </div>
    </div>
  );
};

export default CurrencyTable;
