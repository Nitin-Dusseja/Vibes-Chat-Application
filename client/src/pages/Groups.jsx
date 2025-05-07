import { Add as AddIcon, Delete as DeleteIcon, Done as DoneIcon, Edit as EditIcon, KeyboardBackspace as KeyboardBackspaceIcon, Menu as MenuIcon } from '@mui/icons-material'
import { Backdrop, Button, Drawer, Grid, IconButton, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { lazy, memo, Suspense, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { sampleChats, sampleUsers } from '../components/constants/sampleData'
import AvatarCard from '../components/specific/AvatarCard'
import UserItem from '../components/specific/UserItem'
import { Link } from '../components/styles/StyledComponents'


const ConfirmDeleteDialog = lazy(() => import("../components/dialogs/ConfirmDeleteDialog"))
const AddMemberDialog = lazy(() => import("../components/dialogs/AddMemberDialog"))

function Groups() {

  const chatId = useSearchParams()[0].get("group")
  const isAddMember = false;

  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isEdit, setIsEdit] = useState()
  const [groupName, setGroupName] = useState("Group Name")
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("")
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false)

  useEffect(() => {
    if (chatId) {
      setGroupName("Group Name")
      setGroupNameUpdatedValue("Group name")
    }
    return () => {
      setGroupName("")
      setGroupNameUpdatedValue("")
      setIsEdit(false)
    }
  }, [chatId])

  const handleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }
  const handleMobileClose = () => setIsMobileMenuOpen(false)

  const navigateBack = () => {
    navigate("/")
  }

  const updateGroupName = () => {
    setIsEdit(false)
  }

  const confirmDeleteHandler = () => {
    setConfirmDeleteDialog(true)
    console.log("Delete group")
  }

  const openAddMemberHandler = () => {
    console.log("Add member")
  }

  const closeConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(false);
  };

  const deleteHandler = () => {
    console.log("Delete group")
    closeConfirmDeleteHandler()
  }



  const IconBtn = <>

    <IconButton sx={{
      display: {
        xs: "block",
        sm: "none",
        position: "fixed",
        right: "1rem",
        top: "1rem"
      }
    }}
      onClick={handleMobile}
    >
      <MenuIcon />
    </IconButton>

    <Tooltip sx={{
      position: "absolute",
      left: "1rem"
    }} title="Back">
      <IconButton onClick={navigateBack}>
        <KeyboardBackspaceIcon />
      </IconButton>
    </Tooltip>
  </>

  const GroupName = <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={"1rem"} padding={"3rem"}>
    {isEdit ?
      <>
        <TextField
          value={groupNameUpdatedValue}
          onChange={(e) => setGroupNameUpdatedValue(e.target.value)}
        />
        <IconButton onClick={updateGroupName}>
          <DoneIcon />
        </IconButton>
      </> :
      <>
        <Typography variant='h4'>{groupName}</Typography>
        <IconButton onClick={() => setIsEdit(true)}> <EditIcon /></IconButton>
      </>
    }
  </Stack >


  const ButtonGroup = <Stack direction={{
    sx: "column-reverse",
    sm: "row"
  }}
    spacing={"1rem"}
    p={{
      xs: "0",
      sm: "1rem",
      md: "1rem 4rem"
    }}
  >
    <Button color='error' size="large" variant='outlined' startIcon={<DeleteIcon />}
      onClick={confirmDeleteHandler}
    >Delete Group</Button>
    <Button size="large" variant="contained" startIcon={<AddIcon />}
      onClick={openAddMemberHandler}
    >Add Member</Button>
  </Stack>

  return (
    <Grid container maxHeight={"100%"} overflow={"hidden"} height={"100%"}>
      <Grid sx={{
        display: {
          xs: "none",
          sm: "block"
        }
      }}
        size={4}
        bgcolor={"#ffffff"}
        overflow={"auto"}
        maxHeight={"100%"}
        borderRight={"1px solid rgba(0,0,0,0.2)"}
      ><GroupsList myGroups={sampleChats} chatId={chatId} /></Grid>
      <Grid size="grow" sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        padding: "1rem 2rem",
        overflow: "auto"
      }}>
        {IconBtn}
        {groupName &&
          <>
            {GroupName}
            <Typography margin={"1rem"} alignSelf={"flex-start"} variant='body1'>Members</Typography>
            <Stack
              maxWidth={"45rem"}
              width={"100%"}
              height={"50vh"}
              boxSizing={"border-box"}
              padding={{
                sm: "1rem",
                xs: "0rem",
                md: "1rem 4rem"
              }}
              spacing={"2rem"}
              overflow={"auto"}
            >
              {/* Members */}
              {sampleUsers.map((i) =>
                <UserItem key={i._id} spacing={"0%"} user={i} />)}
            </Stack>
            {ButtonGroup}
          </>
        }
      </Grid>


      {isAddMember && (<Suspense fallback={<Backdrop open />}>
        <AddMemberDialog />
      </Suspense>)}
      {
        confirmDeleteDialog &&
        <Suspense fallback={<Backdrop open />}>
          <ConfirmDeleteDialog open={confirmDeleteDialog} handleClose={closeConfirmDeleteHandler}
            deleteHandler={deleteHandler}
          />
        </Suspense>
      }
      <Drawer sx={{
        display: {
          xs: "block",
          sm: "none"
        }
      }} open={isMobileMenuOpen} onClose={handleMobileClose}>
        <GroupsList w={"50vw"} myGroups={sampleChats} chatId={chatId} />
      </Drawer>
    </Grid>
  )
}


const GroupsList = ({ w = "100%", myGroups = [], chatId }) => (
  <Stack width={w} maxHeight={"100vh"} height={"100vh"} overflow={"auto"} >
    {
      myGroups.length > 0 ? (
        myGroups.map((group) => {
          return <GroupListItem group={group} chatId={chatId} key={group._id}></GroupListItem>
        })
      ) : (
        <Typography textAlign={"center"} padding="1rem">
          No Group
        </Typography>
      )
    }
  </Stack >
)

const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group
  return (
    <Link to={`?group=${_id}`} sx={{
      padding: "1rem 1rem"
    }}
      onClick={(e) => { if (chatId === _id) e.preventDefault() }}
    >
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <AvatarCard avatar={avatar} />
        <Typography sx={{ color: { xs: "black", sm: "black" }, }}>{name}</Typography>
      </Stack>
    </Link>
  )
})

export default Groups