import { Card, CardContent, Typography, Box } from '@mui/material';

const DashboardCard = ({ title, value, subtitle, color }) => {
  return (
    <Card sx={{ bgcolor: color, color: 'white', borderRadius: 3, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          {value}
        </Typography>
        <Typography variant="body1">{title}</Typography>
        <Typography variant="caption">{subtitle}</Typography>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
