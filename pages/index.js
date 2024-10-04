import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function Index() {
  var code = `
# Shrink menu bar
votebuilder.com##.app-branding:style( display: none; )
votebuilder.com##.app-content:style( padding-top: 40px;)
votebuilder.com##.app-nav-container>.sidebar-toggle-container:style( top: 0px !important; )


# Hide "last tried number" except on hover
votebuilder.com###last-tried-number:style(color: white;)
votebuilder.com###last-tried-number:hover:style(color: gray;)

# Narrow contact's name so the number doesn't wrap to be under the name
votebuilder.com##h1:has(#ctl00_ContentPlaceHolderVANPage_HeaderText):style( width: 18rem; )


# Reverse right hand widgets
votebuilder.com###ctl00_ContentPlaceHolderVANPage_VANSectionHeadingWide_TableCellSectionHeadingContent_VANSectionHeadingWide:style( display: flex; flex-direction: column-reverse; )

# Hide volunteers panel
votebuilder.com##.pageSectionPanel_Volunteers:style( display:none;)

# Shrink panels padding
votebuilder.com##.panel.panel-default:style( padding-top: 0px; padding-bottom: 0px; )
votebuilder.com##.panel-details:style( width: auto; )
votebuilder.com###ContactDetailScriptProgressBars.panel.panel-default:style( padding-top: 0px; padding-bottom: 0px; )
`;

  return (
    <Container maxWidth="lg">
      <Typography variant='h1'>VAN Tweaks</Typography>
      <Box>
        <Box>
          1. Press the Extensions button in the toolbar, and then press <b>uBlock Origin</b>:
        </Box>
        <img src="/extension.png" width={300} />
      </Box>

      <Box mt={6}>
        <Box>
          2. When the panel opens, click the gears icon:
        </Box>
        <img src="/uBlock-Origin-panel.png" width={300} />
      </Box>

      <Box mt={6}>
        <Box>
          3. Then open the "My Filters" tab:
        </Box>
        <img src="/my-filters.png" width={600} />
      </Box>
      

      <Box mt={6}>
        4. Paste this code in the big text box:
        <Box>
          <pre>{code}
          </pre>
        </Box>
      </Box>
    </Container>
  );
}
