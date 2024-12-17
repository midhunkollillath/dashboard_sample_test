import React from 'react';
import { Box, Container, Grid2, Typography } from '@mui/material';
import DashboardHeader from '../components/DashboardHeader';
import StatCard from '../components/StatCard';
import CustomerSatisfactionChart from '../components/CustomerSatisfactionChart';
import YearPlanProgressBar from '../components/YearPlanProgressBar';
import SalesTargetChart from '../components/SaleChart';
import OperatingExpensesBarChart from '../components/OperatingExpenseChart';
import ProgressCard from '../components/ProgressCard';

function DashboardPage() {
  return (
    <Box sx={{ backgroundColor: '#121212', minHeight: '100vh', color: '#fff' }}>
      {/* Dashboard Header */}
      <DashboardHeader />

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid2 container spacing={4}>
          {/* Top Cards */}
          <Grid2 item xs={12} sm={6} md={4}>
            <Box sx={{ mb: 4 }}>
              <StatCard
                title="Total Volume of Services"
                value="300"
                percentage="+19.5%"
              />
            </Box>
          </Grid2>
          <Grid2 item xs={12} sm={6} md={4}>
            <Box sx={{ mb: 4 }}>
              <StatCard
                title="Number of New Clients"
                value="64"
                percentage="-6.8%"
              />
            </Box>
          </Grid2>
          <Grid2 item xs={12} sm={12} md={4}>
            <Box sx={{ mb: 4 }}>
              <YearPlanProgressBar current={22567081} left={8432119} />
            </Box>
          </Grid2>

          {/* Nested Progress Cards */}
          <Grid2 item xs={12}>
            <Grid2 container spacing={3}>
              <Grid2 item xs={12} sm={6} md={6}>
                <ProgressCard title="Advertising" value="30%" />
              </Grid2>
              <Grid2 item xs={12} sm={6} md={6}>
                <ProgressCard title="Development" value="25%" />
              </Grid2>
              <Grid2 item xs={12} sm={6} md={6}>
                <ProgressCard title="Sales" value="30%" />
              </Grid2>
              <Grid2 item xs={12} sm={6} md={6}>
                <ProgressCard title="Management" value="15%" />
              </Grid2>
            </Grid2>
          </Grid2>

          {/* Charts */}
          <Grid2 item xs={12} md={6}>
            <CustomerSatisfactionChart />
          </Grid2>
          <Grid2 item xs={12} md={6}>
            <SalesTargetChart />
          </Grid2>

          <Grid2 item xs={12} md={6}>
            <OperatingExpensesBarChart />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}

export default DashboardPage;