import { FlashList } from "@shopify/flash-list";
import { Text, View } from "react-native";

const data = Array.from({ length: 10000 }, (_, i) => ({
  id: i.toString(),
  title: `Item ${i}`,
}));

const FlashListExample = () => {
  return (
    <FlashList
      data={data}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <Text>{item.title}</Text>
        </View>
      )}
      estimatedItemSize={30}
      keyExtractor={(item) => item.id}
    />
  );
};

export default FlashListExample;
