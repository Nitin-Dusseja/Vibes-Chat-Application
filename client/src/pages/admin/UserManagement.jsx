import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import Table from '../../components/specific/Table'
import { Avatar } from '@mui/material'
import { dashboarddata } from '../../components/constants/sampleData'
import { transformImage } from '../../lib/features'

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
    renderCell: (params) => <Avatar sx={{ margin: "5%" }} alt={params.row.name} src={params.row.avatar} />
  },
  {
    field: "name",
    headerName: "Name",
    headerClassName: "table-header",
    width: 200
  },
  {
    field: "username",
    headerName: "Username",
    headerClassName: "table-header",
    width: 200
  },
  {
    field: "friends",
    headerName: "Friends",
    headerClassName: "table-header",
    width: 150
  },
  {
    field: "groups",
    headerName: "Groups",
    headerClassName: "table-header",
    width: 200
  },
]

const UserManagement = () => {

  useEffect(() => {
    setRows(dashboarddata.user.map((i) => ({
      ...i, id: i._id,
      avatar: transformImage(i.avatar, 50)
    })))
  }, [])

  const [rows, setRows] = useState([])

  return (
    <AdminLayout>
      <Table heading={"All User"} columns={columns} rows={rows} />
    </AdminLayout>
  )
}

export default UserManagement