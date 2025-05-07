import { Box, Stack, Typography } from '@mui/material'
import React, { memo } from 'react'
import { Link } from '../styles/StyledComponents'
import AvatarCard from '../specific/AvatarCard'

const ChatItem = ({
  avatar = [],
  name,
  _id,
  groupchat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChat,
}) => {
  return (
    <Link to={`/chat/${_id}`}
      onContextMenu={(e) => handleDeleteChat(e, _id, groupchat)}>
      <div style={{
        display: "flex",
        minHeight: "5rem",
        maxHeight: "6rem",
        padding: "10px",
        gap: "1.5rem",
        alignItems: "center",
        backgroundColor: sameSender ? "#1989f0" : "unset",
        color: sameSender ? "white" : "black",
        position: "relative",
      }}>

        <AvatarCard avatar={avatar} />

        <Stack>
          <Typography sx={{
            fontSize: "clamp(.5rem,3vw,1.2rem)",
            fontWeight: "500"
          }}>{name}</Typography>
          {newMessageAlert && (
            <Typography variant='caption'> <small> {newMessageAlert.count} New Message </small></Typography>
          )}
        </Stack>

        {isOnline && (
          <Box sx={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "#1DCD9F",
            position: "absolute",
            top: "50%",
            right: "1rem",
            transform: "translateY(-50%)",
          }}></Box>
        )}
      </div>
    </Link>
  )
}

export default memo(ChatItem)