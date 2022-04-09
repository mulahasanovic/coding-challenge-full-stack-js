import { useState } from "react";
import useAxios from 'axios-hooks';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';

import TableRowsIcon from '@mui/icons-material/TableRows';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';

function App() {
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState('');
  const [isGrid, setIsGrid] = useState(true);

  const [{ data, loading, error }, refetch] = useAxios(`http://localhost:3001/api/search?tags=${tags}`);
  return (
    <Container maxWidth="xl">
      <Box
        sx={{ height: '100vh' }}
      >
        {
          loading && <LinearProgress
            sx={{
              top: 0,
              left: 0,
              right: 0,
              position: 'fixed',
              width: '100%',
            }}
          />
        }
        <Typography variant="h2" component="h1">
          Hello crewfire!
        </Typography>
        <Stack
          spacing={2}
          direction="row"
        >
          <TextField
            id="search"
            label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={() => {
              setTags(search);
              refetch();
            }}
          >
            Search
          </Button>
          <ToggleButtonGroup
            color="primary"
            value={isGrid}
            exclusive
            onChange={(e, v) => {
              console.log(e, v)
              setIsGrid(v);
            }}
          >
            <ToggleButton value={true}>
              <ViewComfyIcon />
            </ToggleButton >
            <ToggleButton value={false}>
              <TableRowsIcon />
            </ToggleButton >
          </ToggleButtonGroup>
        </Stack>
        <Box mt={2}>
          {
            error
              ? <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="error">{error.message}</Alert>
              </Stack>
              : <Grid
                container
                spacing={2}
              >
                {data?.map((item, index) => (
                  <Grid
                    item
                    key={index}
                    {...(isGrid ? { xs: 12, sm: 6, md: 4, lg: 3 } : { xs: 12 })}
                  >
                    {/* <h3>{item.title}</h3>
                    <p>{item.tags}</p> */}
                    <img src={item.media.m} alt={item.title} />
                  </Grid>
                )) || []
                }
              </Grid>
          }
        </Box>
      </Box>
    </Container>
  );
}

export default App;
