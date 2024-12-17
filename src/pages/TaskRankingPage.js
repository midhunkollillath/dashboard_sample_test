import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Grid2,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  Paper,
  Container,
} from "@mui/material";
import { useDrag, useDrop } from "react-dnd";


const DraggableTask = ({ task }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "TASK",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <Card
      ref={dragRef}
      sx={{
        marginBottom: "10px",
        opacity: isDragging ? 0.5 : 1,
        cursor: "grab",
      }}
    >
      <CardContent>
        <Typography variant="subtitle1">{task.name}</Typography>
        <Typography variant="body2">{task.description}</Typography>
      </CardContent>
    </Card>
  );
};


const TaskRankingPage = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task 1", description: "Description 1", rank: null },
    { id: 2, name: "Task 2", description: "Description 2", rank: null },
    { id: 3, name: "Task 3", description: "Description 3", rank: null },
    { id: 4, name: "Task 4", description: "Description 4", rank: null },
    { id: 5, name: "Task 5", description: "Description 5", rank: null },
  ]);
  const [rankedTasks, setRankedTasks] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [newTask, setNewTask] = useState({ name: "", description: "" });

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleAddTask = () => {
    if (!newTask.name || !newTask.description) return;
    setTasks([
      ...tasks,
      { id: Date.now(), name: newTask.name, description: newTask.description, rank: null },
    ]);
    setNewTask({ name: "", description: "" });
    handleCloseModal();
  };

  const [, dropRef] = useDrop(() => ({
    accept: "TASK",
    drop: (item) => handleDrop(item.id),
  }));

  const handleDrop = (taskId) => {
    const taskToMove = tasks.find((task) => task.id === taskId);
    if (taskToMove) {
      const updatedRankedTasks = [...rankedTasks, { ...taskToMove, rank: rankedTasks.length + 1 }];
      setRankedTasks(updatedRankedTasks);
      setTasks(tasks.filter((task) => task.id !== taskId));
    }
  };

  return (
    <Box
    sx={{
      backgroundColor: "#121212",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 2, // Outer padding
    }}
  >
    <Container maxWidth="lg">
      <Paper
        elevation={10}
        sx={{
          padding: 4,
          backgroundColor: "#1f1f1f",
          color: "#ffffff",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
  
        <Grid2 container justifyContent="space-between" alignItems="center">
          <Typography variant="h5">Task Ranking Page</Typography>
          <Button variant="contained" color="primary" onClick={handleOpenModal}>
            Add Task
          </Button>
        </Grid2>

        <Grid2 container spacing={4} justifyContent="center">
          {/* Unranked Tasks Card */}
          <Grid2 item xs={12} sm={6} md={5}>
            <Card sx={{ minHeight: "300px", border: "1px solid #ccc", backgroundColor: "#2c2c2c" }}>
              <CardContent>
                <Typography variant="h6">Unranked Tasks</Typography>
                {tasks.map((task) => (
                  <DraggableTask key={task.id} task={task} />
                ))}
              </CardContent>
            </Card>
          </Grid2>

          <Grid2 item xs={12} sm={6} md={5}>
            <Card
              ref={dropRef}
              sx={{
                minHeight: "300px",
                border: "2px dashed #ccc",
                backgroundColor: "#f9f9f9",
              }}
            >
              <CardContent>
                <Typography variant="h6">Ranked Tasks</Typography>
                {rankedTasks.map((task) => (
                  <Card key={task.id} sx={{ marginBottom: "10px", backgroundColor: "#2c2c2c" }}>
                    <CardContent>
                      <Typography variant="subtitle1" sx={{ color: "#fff" }}>
                        {task.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#fff" }}>
                        {task.description}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#aaa" }}>
                        Rank: {task.rank}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>

        <Dialog open={openModal} onClose={handleCloseModal}>
          <DialogTitle>Add New Task</DialogTitle>
          <DialogContent>
            <TextField
              margin="normal"
              label="Task Name"
              fullWidth
              value={newTask.name}
              onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
              sx={{
                backgroundColor: "#2c2c2c",
                borderRadius: "8px",
                input: { color: "#fff" },
              }}
            />
            <TextField
              margin="normal"
              label="Task Description"
              fullWidth
              value={newTask.description}
              onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
              sx={{
                backgroundColor: "#2c2c2c",
                borderRadius: "8px",
                input: { color: "#fff" },
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleAddTask} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </Container>
  </Box>
  );
};

export default TaskRankingPage;
