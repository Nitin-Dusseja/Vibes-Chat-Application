import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material'
import { Avatar, IconButton, ListItem, Stack, Typography } from '@mui/material'
import React, { memo } from 'react'
import { transformImage } from '../../lib/features'


const UserItem = ({ user, handler, handlerIsLoading, isAdded = false }) => {

  const { name, _id, avatar } = user

  return (
    <ListItem>
      <Stack
        direction={"row"}
        spacing={"1rem"}
        alignItems={"center"}
        width={"100%"}
      >
        <Avatar src={transformImage(avatar)} />
        <Typography
          variant='body1'
          sx={{
            flexGrow: "1",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis"
          }}
        >{name}</Typography>
        <IconButton
          size='small'
          sx={{
            bgcolor: isAdded ? "error.main" : "primary.main",
            color: "white",
            "&:hover": {
              bgcolor: isAdded ? "error.dark" : "primary.dark"
            }
          }}
          onClick={() => handler(_id)} disabled={handlerIsLoading} >
          {isAdded ? <RemoveIcon /> : <AddIcon />}
        </IconButton>
      </Stack>
    </ListItem>
  )
}

export default memo(UserItem)