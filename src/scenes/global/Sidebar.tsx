import { useState } from 'react';
import { Sidebar as ProSideBar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme, Avatar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { tokens } from '../../theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

// type
import { MenuItemType } from '../../types/Sidebar.type';

const Item = (props: MenuItemType) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      icon={props.icon}
      component={props.component}
      style={{ color: colors.grey[100] }}
    >
      <Typography>{props.title}</Typography>
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Box
      sx={{
        '& .ps-menu-button:hover': {
          bgcolor: 'transparent!important',
          color: '#868dfb!important',
        },
        '& .ps-menu-button.active': {
          color: '#868dfb!important',
        },
      }}
    >
      <ProSideBar
        collapsed={isCollapsed}
        rootStyles={{ height: '100%', border: 'none' }}
        backgroundColor={colors.primary[400]}
      >
        <Menu>
          <MenuItem
            icon={
              isCollapsed ? (
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              ) : null
            }
            style={{ marginTop: '10px', marginBottom: '20px' }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="h3"
                  variantMapping={{ h3: 'h1' }}
                  color={colors.grey[100]}
                  fontWeight={400}
                >
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mb={3}
            >
              <Avatar src="/assets/user.png" sx={{ width: 100, height: 100 }} />
              <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                marginTop="10px"
              >
                Minh Nhat
              </Typography>
              <Typography variant="h5" color={colors.greenAccent[500]}>
                VP Fancy Admin
              </Typography>
            </Box>
          )}

          <Item
            title="Dashboard"
            icon={<HomeOutlinedIcon />}
            component={<NavLink to="/" />}
          />

          <Typography
            marginInline="24px"
            marginTop={3}
            marginBottom={1}
            color={colors.grey[300]}
          >
            Data
          </Typography>
          <Item
            title="Manage Team"
            icon={<PeopleOutlinedIcon />}
            component={<NavLink to="/team" />}
          />
          <Item
            title="Contacts Information"
            icon={<ContactsOutlinedIcon />}
            component={<NavLink to="/contacts" />}
          />
          <Item
            title="Invoices Balances"
            icon={<ReceiptOutlinedIcon />}
            component={<NavLink to="/invoices" />}
          />

          <Typography
            marginInline="24px"
            marginTop={3}
            marginBottom={1}
            color={colors.grey[300]}
          >
            Pages
          </Typography>
          <Item
            title="Profile Form"
            icon={<PersonOutlinedIcon />}
            component={<NavLink to="/form" />}
          />
          <Item
            title="Calendar"
            icon={<CalendarTodayOutlinedIcon />}
            component={<NavLink to="/calendar" />}
          />
          <Item
            title="FAQ Page"
            icon={<HelpOutlineOutlinedIcon />}
            component={<NavLink to="/faq" />}
          />

          <Typography
            marginInline="24px"
            marginTop={3}
            marginBottom={1}
            color={colors.grey[300]}
          >
            Charts
          </Typography>
          <Item
            title="Bar Chart"
            icon={<BarChartOutlinedIcon />}
            component={<NavLink to="/bar" />}
          />
          <Item
            title="Pie Chart"
            icon={<PieChartOutlinedIcon />}
            component={<NavLink to="/pie" />}
          />
          <Item
            title="Line Chart"
            icon={<TimelineOutlinedIcon />}
            component={<NavLink to="/line" />}
          />
          <Item
            title="Geography Chart"
            icon={<MapOutlinedIcon />}
            component={<NavLink to="/geography" />}
          />
        </Menu>
      </ProSideBar>
    </Box>
  );
};

export default Sidebar;
