import CheckIcon from '@mui/icons-material/Check';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { themes } from 'prism-react-renderer';
import { CodeBlock as ReactCodeBlock } from 'react-code-block/dist/code-block';
import { useCopyToClipboard } from 'react-use';

export default function CodeBlock({ code, language, width = 900 }) {
  const [state, copyToClipboard] = useCopyToClipboard();

  const copyCode = () => {
    // Logic to copy `code`
    copyToClipboard(code);
  };

  // From https://stackoverflow.com/a/75052706/1749551
  const StyledIconButton = styled(IconButton)(({ theme, variant, color }) => {
    const overrides = {};

    const colorAsVariant = color === undefined || color === 'inherit' || color === 'default' ? 'primary' : color;

    if (variant === 'contained') {
      overrides.backgroundColor = theme.palette[colorAsVariant].main;
      overrides.color = theme.palette[colorAsVariant].contrastText;
      overrides[':hover'] = {
        backgroundColor: theme.palette[colorAsVariant].dark,
      };
    }

    if (variant === 'outlined') {
      overrides.border = `1px solid ${theme.palette[colorAsVariant].main}`;
      overrides.color = theme.palette[colorAsVariant].main;
      overrides.borderRadius = "5px";
    }

    return {
      ...overrides,
    };
  });

  return (
    <ReactCodeBlock code={code} language={language} theme={themes.github}>
      <Box width={width} sx={{ position: "relative" }}>
        <Box width={width} p={2} sx={{ border: "solid 4px #D9DCDF", borderRadius: "10px", bgcolor: "#F1F4F7", overflow: "scroll", overflowY: "visible" }}>
          <StyledIconButton
            onClick={copyCode}
            variant="outlined"
            size='small'
            sx={{ position: "absolute", top: 20, right: 20 }}
          >
            {state.value ? <CheckIcon fontSize="inherit" /> : <ContentCopyIcon fontSize="inherit" />}
          </StyledIconButton>

          <ReactCodeBlock.Code style={{ "margin-top": "0" }}>
            <ReactCodeBlock.LineContent>
              <ReactCodeBlock.Token />
            </ReactCodeBlock.LineContent>
          </ReactCodeBlock.Code>
        </Box>
      </Box>
    </ReactCodeBlock >
  );
}

