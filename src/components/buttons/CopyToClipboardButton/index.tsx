import { Stack, Tooltip } from "@mui/material";
import React, { ReactNode, useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import copy from "copy-to-clipboard";

interface Props {
  textToCopy: string;
  children: ReactNode;
}

const CopyToClipBoardButton: React.FC<Props> = ({ textToCopy, children }) => {
  const [copied, setCopied] = useState(false);

  const copyText = () => {
    copy(textToCopy);
    setCopied(true);
  };

  return (
    <Tooltip title={copied ? "Copied" : "Copy to clipboard"}>
      <Stack
        onClick={copyText}
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{ cursor: "pointer" }}
        onMouseLeave={() => {
          setTimeout(() => {
            setCopied(false);
          }, 500);
        }}
      >
        {children}

        <ContentCopyIcon sx={{ fontSize: 16 }} />
      </Stack>
    </Tooltip>
  );
};

export default CopyToClipBoardButton;
