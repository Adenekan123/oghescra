import { View } from "react-native";
import { Barcode } from "expo-barcode-generator";

interface IProps {
  token: string;
}
const TokenBarcode = (props: IProps) => {
  const { token } = props;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Barcode
        value={token}
        options={{ format: "UPC", background: "white" }}
        rotation={-5}
      />
    </View>
  );
};

export default TokenBarcode;
