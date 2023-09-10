import React from "react";
import { Box } from "ink";
import ContentContainer from "../../components/ContentContainer";
import DetailRow from "./DetailRow";
import DetailEntryOptions from "./DetailEntryOptions";
import UsageInfo from "../../components/UsageInfo";
import { useAtom } from "jotai";
import { detailedEntryAtom } from "../../store/app";

const Detail: React.FC = () => {
  const [detailedEntry] = useAtom(detailedEntryAtom);

  if (!detailedEntry) {
    return null;
  }

  return (
    <Box flexDirection="column">
      <ContentContainer>
        {Object.entries(detailedEntry)
          .filter(([key]) => key !== "downloadUrls")
          .map(([key, value], idx) => (
            <DetailRow
              key={idx}
              label={key === "id" ? key.toUpperCase() : `${key[0].toUpperCase()}${key.slice(1)}`}
              description={value}
            />
          ))}
        <DetailEntryOptions />
      </ContentContainer>
      <UsageInfo />
    </Box>
  );
};

export default Detail;
