import { Button, Dialog, DialogTitle, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { sampleUsers } from '../constants/sampleData'
import UserItem from "../specific/UserItem"

const AddMemberDialog = ({ addMember, isLoadinAddMember, chatId }) => {

  const [members, setMembers] = useState(sampleUsers)
  const [selectedMembers, setSelectedMembers] = useState([])

  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) => prev.includes(id) ? prev.filter((currElement) => currElement !== id) : [...prev, id])
  }

  const addMemberSubmitHandler = () => {
    closeHandler()
  }

  const closeHandler = () => {
    setSelectedMembers([])
    setMembers([])
  }

  return (
    <Dialog open>
      <Stack p={".5rem"} width={"25rem"} maxWidth={"80vw"} spacing={".5rem"} >
        <DialogTitle textAlign={"center"} >Add Members</DialogTitle>
        <Stack overflowY={"hidden"}>
          {
            members.length > 0 ? (members.map((i) => (
              <UserItem
                key={i._id}
                user={i}
                handler={selectMemberHandler}
                isAdded={selectedMembers.includes(i._id)}
              />
            ))) : (<Typography textAlign={"center"}>No Friends</Typography>)
          }
        </Stack>
        <Stack direction={"row"} alignItems={"center"} p={".5rem"} justifyContent={"space-between"}>
          <Button onClick={closeHandler} color='error' variant='outlined'>Cancel</Button>
          <Button onClick={addMemberSubmitHandler} variant='contained' >Submit Changes</Button>
        </Stack>
      </Stack>
    </Dialog>
  )
}

export default AddMemberDialog