import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import CodeBlock from '../src/CodeBlock';


export default function Index() {
  var code = `# VAN Tweaks, version 3

# Shrink menu bar
votebuilder.com##.app-branding:style( display: none; )
votebuilder.com##.app-content:style( padding-top: 40px;)
votebuilder.com##.app-nav-container>.sidebar-toggle-container:style( top: 0px !important; )


# Hide "last tried number" except on hover
votebuilder.com###last-tried-number:style(color: white;)
votebuilder.com###last-tried-number:hover:style(color: gray;)

# Narrow contact name so the number does not wrap to be under the name
votebuilder.com##h1:has(#ctl00_ContentPlaceHolderVANPage_HeaderText):style( width: 18rem; )


# Reverse right hand widgets
votebuilder.com###ctl00_ContentPlaceHolderVANPage_VANSectionHeadingWide_TableCellSectionHeadingContent_VANSectionHeadingWide:style( display: flex; flex-direction: column-reverse; )

# Hide volunteers panel
votebuilder.com##.pageSectionPanel_Volunteers:style( display:none;)

# Shrink panels padding
votebuilder.com##.panel.panel-default,.page-section .panel-heading-narrow:style( padding-top: 0px !important; padding-bottom: 0px !important; )
votebuilder.com##.panel-details:style( width: auto; )
votebuilder.com###ContactDetailScriptProgressBars.panel.panel-default:style( padding-top: 0px; padding-bottom: 0px; )

# Bump Notes panel to the top
votebuilder.com###ctl00_ContentPlaceHolderVANPage_VANSectionHeadingWide_TableCellSectionHeadingContent_VANSectionHeadingWide>div:has(.RadAjaxPanel>.pageSectionPanel_Notes):style(order:99)
`;

  return (
    <Container maxWidth="lg">
      <Typography variant='h2'>VAN Tweaks</Typography>

      <Grid container spacing={1}>
        <Grid size={3}>
          1. Press the Extensions button in the toolbar, and then press <b>uBlock Origin</b>:
        </Grid>
        <Grid size={8}>
          <img src="/extension.png" width={300} />
        </Grid>
        <Grid size={3}>
          2. When the panel opens, click the gears icon:
        </Grid>
        <Grid size={8}>
          <img src="/uBlock-Origin-panel.png" width={300} />
        </Grid>
        <Grid size={3}>
          3. Then open the "My Filters" tab:
        </Grid>
        <Grid size={8}>
          <img src="/my-filters.png" width={600} />
        </Grid>
      </Grid>

      <Box mt={6}>
        4. Paste this code in the big text box:
        <Box mt={1}>
          <CodeBlock code={code} language="CSS" width="55rem" />
        </Box>
      </Box>
    </Container>
  );
}
