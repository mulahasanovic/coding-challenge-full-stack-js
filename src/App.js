import { useState } from "react";

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

import GridItem from "./components/GridItem";
import ListItem from "./components/ListItem";

import useSearch from './hooks/useSearch';

function App() {
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState('');
  const [isGrid, setIsGrid] = useState(true);

  const { data, loading, error } = useSearch(tags);

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
          id="seachForm"
          spacing={2}
          direction="row"
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            setTags(search);
          }}
        >
          <TextField
            id="search"
            label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            variant="contained"
            type="submit"
          >
            Search
          </Button>
          <ToggleButtonGroup
            color="primary"
            value={isGrid}
            exclusive
            onChange={(e, v) => {
              if(v !== null) {
                setIsGrid(v);
              }
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
              ? <Stack>
                <Alert severity="error">{error.message}</Alert>
              </Stack>
              : <Grid
                container
                spacing={2}
              >
                {data?.length > 0
                  ? data?.map((item, index) => {
                    const itemProps = {
                      title: item.title,
                      imageSrc: item.media.m,
                      tags: item.tags,
                    };

                    return (
                      <Grid
                        item
                        key={index}
                        {...(isGrid ? { xs: 12, sm: 6, md: 4, lg: 3 } : { xs: 12 })}
                      >
                        {
                          isGrid
                            ? <GridItem
                              {...itemProps}
                            />
                            : <ListItem
                              {...itemProps}
                            />
                        }
                      </Grid>
                    )
                  })
                  : tags !== '' && <Grid item xs={12}>
                    <Alert mt={4} severity="info">No results found</Alert>
                  </Grid>
                }
              </Grid>
          }
        </Box>
      </Box>
    </Container>
  );
}

export default App;
