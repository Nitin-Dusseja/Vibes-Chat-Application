import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import Table from '../../components/specific/Table'
import { Avatar, Stack } from '@mui/material'
import { dashboarddata } from '../../components/constants/sampleData'
import { transformImage } from '../../lib/features'
import AvatarCard from '../../components/specific/AvatarCard'


const columns = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "table-header",
    width: 200
  },
  {
    field: "avatar",
    headerName: "Avatar",
    headerClassName: "table-header",
    width: 150,
    renderCell: (params) => <AvatarCard h={3} w={3} avatar={params.row.avatar} />
  },
  {
    field: "name",
    headerName: "Name",
    headerClassName: "table-header",
    width: 300
  },
  {
    field: "totalMembers",
    headerName: "total Members",
    headerClassName: "table-header",
    width: 120
  },
  {
    field: "members",
    headerName: "Members",
    headerClassName: "table-header",
    width: 400,
    renderCell: (params) => <AvatarCard max={100} avatar={params.row.members} />
  },
  {
    field: "totalMessage",
    headerName: "Total Message",
    headerClassName: "table-header",
    width: 120
  },
  {
    field: "creator",
    headerName: "Created By",
    headerClassName: "table-header",
    width: 250,
    renderCell: (params) => <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} >
      <Avatar alt={params.row.creator.avatar} src={params.row.creator.avatar} />
      <span>{params.row.creator.name}</span>
    </Stack>
  },
]

const ChatManagement = () => {

  useEffect(() => {
    setRows(dashboarddata.chats.map((i) => ({
      ...i,
      id: i._id,
      avatar: i.avatar.map((i) => transformImage(i, 10)),
      members: i.members.map((i) => transformImage(i.avatar, 10)),
      creator: {
        name: i.creator.name,
        avatar: transformImage(i.creator.avatar, 50),
      },
    })))
  }, [])

  const [rows, setRows] = useState([])

  return (
    <AdminLayout>
      <Table heading={"All Chats"} columns={columns} rows={rows} />
    </AdminLayout>
  )
}


export default ChatManagement