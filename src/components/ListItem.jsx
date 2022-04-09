import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function ListItem (props) {
  const {
    title,
    imageSrc,
    tags
  } = props;

  return (
    <Paper>
      <Stack direction="row">
        <img src={imageSrc} alt={title} />
        <Box p={2}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {tags}
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}
