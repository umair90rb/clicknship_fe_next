"use client";

import { useGetDummyDataQuery } from "@/store/api";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Home() {
  const { data, error, isLoading } = useGetDummyDataQuery();

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {JSON.stringify(error)}</Typography>;

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Next.js with Redux RTK Query and MUI
      </Typography>
      <Button variant="contained" color="primary">
        MUI Button
      </Button>
      <Typography variant="h5" component="h2" sx={{ mt: 4 }}>
        Dummy Data from RTK Query:
      </Typography>
      {data && data.map((item: any) => (
        <Typography key={item.id}>{item.title}</Typography>
      ))}
    </Box>
  );
}
