import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import moment from 'moment'
import { Box, Container, IconButton, Paper, Stack, Typography } from '@mui/material'
import { AdminPanelSettings as AdminPanelSettingsIcon, Group as GroupIcon, Message as MessageIcon, Notifications as NotificationsIcon, Person as PersonIcon, Search } from '@mui/icons-material'
import { SearchInput } from '../../components/styles/StyledComponents'
import { DoughnutChart, LineChart } from '../../components/specific/Charts'



const Dashboard = () => {

  const Appbar = (<Paper
    elevation={3}
    sx={{
      padding: "1.5rem",
      margin: {
        xs: "4rem 0rem 1rem 0rem",
        md: "1rem 0rem 1rem 0rem"
      },
      borderRadius: "1rem",
    }}
  >
    <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
      <AdminPanelSettingsIcon sx={{ fontSize: "2.5rem" }} />
      <div style={{
        border: "1px solid rgba(0,0,0,0.4)",
        padding: "0px 15px",
        borderRadius: "3rem",
        width: "15rem",
        minWidth: "auto",
        maxWidth: "auto",
        display: "flex"
      }}>
        <SearchInput placeholder='Search' />
        <IconButton>
          <Search />
        </IconButton>
      </div>
      <Box flexGrow={"1"} />
      <Typography sx={{
        display: {
          xs: "none",
          sm: "block"
        }
      }}> {moment().format("MMMM Do YYYY")} </Typography>
      <NotificationsIcon />
    </Stack>
  </Paper >)

  const Widgets = (<Stack
    direction={{
      xs: "column",
      sm: "row"
    }}
    spacing={"1rem"}
    justifyContent={"space-between"}
    alignItems={"center"}
    margin={"2rem 0rem"}
  >
    <Widget title={"User"} value={34} icon={<PersonIcon />} />
    <Widget title={"Chats"} value={34} icon={<GroupIcon />} />
    <Widget title={"Messages"} value={34} icon={<MessageIcon />} />
  </Stack >)


  return (
    <AdminLayout>
      <Container component={"main"}>
        {Appbar}

        <Stack
          direction={{
            xs: "column",
            lg: "row"
          }}
          spacing={"2rem"}
          gap={"2rem"}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          <Paper
            elevation={3}
            sx={{
              padding: {
                xs: "1rem",
                md: "1rem 3rem"
              },
              borderRadius: "1rem",
              width: "100%",
              maxWidth: "100%"
            }}
          >
            <Typography margin={".5rem"} variant='h5'>Last Messages</Typography>
            <LineChart value={[1, 22, 33, 44, 55, 54, 33, 22, 23]} />
          </Paper>
          <Paper
            elevation={3}
            sx={{
              padding: "1rem",
              borderRadius: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              position: "relative",
              maxWidth: "25rem",
              height: "25rem"
            }}
          >
            <DoughnutChart labels={["Single Chats", "Group Chats"]} value={["33", "67"]} />
            <Stack
              position={"absolute"}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={".5rem"}
              height={"100%"}
              width={"100%"}
            >
              <GroupIcon /> <Typography>VS</Typography> <PersonIcon />
            </Stack>
          </Paper>
        </Stack>
        {Widgets}
      </Container>
    </AdminLayout>
  )
}

const Widget = ({ title, value, icon }) => <Paper
  sx={{
    padding: "2rem",
    margin: "2rem 0rem",
    borderRadius: "1rem",
    width: "20rem"
  }}
  elevation={3}
>
  <Stack alignItems={"center"} spacing={"1rem"}>
    <Typography
      sx={{
        color: "rgba(0,0,0,0.8)",
        borderRadius: "50%",
        border: "3px solid rgba(0,0,0,0.7)",
        height: "5rem",
        width: "5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >{value}</Typography>
    <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
      {icon}
      <Typography>{title}</Typography>
    </Stack>
  </Stack>
</Paper>

export default Dashboard