import React from 'react'
import CIcon from '@coreui/icons-react'
import {
    cilTags,
    cilUser,
    cilTask,
    cilSpeedometer
} from '@coreui/icons'
import {
    CNavItem,
    CNavTitle
} from '@coreui/react'

const _nav = [{
    component: CNavItem,
    name: 'Dashboard',
    to: '/admin/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
},
    {
        component: CNavTitle,
        name: 'Master Data',
    },
    {
        component: CNavItem,
        name: 'Category',
        to: '/admin/category',
        icon: <CIcon icon={cilTags} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: 'Item',
        to: '/admin/item',
        icon: <CIcon icon={cilTags} customClassName="nav-icon" />,
    },

    {
        component: CNavItem,
        name: 'Bank',
        to: '/admin/bank',
        icon: <CIcon icon={cilTags} customClassName="nav-icon" />,
    },
    {
        component: CNavTitle,
        name: 'Bookings',
    },
    {
        component: CNavItem,
        name: 'Booking',
        to: '/admin/booking',
        icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: 'Customer',
        to: '/admin/customer',
        icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    },
    {
        component: CNavTitle,
        name: 'Settings',
    },
    {
        component: CNavItem,
        name: 'User',
        to: '/admin/user',
        icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    },
]

export default _nav