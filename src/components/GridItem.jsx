import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function GridItem(props) {
  const {
    title,
    imageSrc,
    tags
  } = props;

  return (
    <Card>
      <CardMedia
        component="img"
        image={imageSrc}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {tags}
        </Typography>
      </CardContent>
    </Card>
  );
}
