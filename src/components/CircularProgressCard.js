import { Card, CardContent, Typography, CircularProgress, Box } from '@mui/material';

const CircularProgressCard = ({ title, value, progress }) => {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Box position="relative" display="inline-flex">
          <CircularProgress variant="determinate" value={progress} size={100} thickness={5} />
          <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="h6" component="div" color="textSecondary">
              {value}%
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CircularProgressCard;
