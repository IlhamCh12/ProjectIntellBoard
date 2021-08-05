import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import imageName from '../../assets/logo1.png';
import '../Style/Tete.css';
import { styled , makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import { SketchPicker } from 'react-color';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import BarChartIcon from '@material-ui/icons/BarChart';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import EcoIcon from '@material-ui/icons/Eco';
import ComputerIcon from '@material-ui/icons/Computer';
import PolicyIcon from '@material-ui/icons/Policy';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import axios from 'axios';
import cookie from 'react-cookies';

const drawerWidth = 340;

axios.defaults.withCredentials = true;



const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),

  },
  hide: {
    display: 'none',
  },
  title: {
    color: '#DCB700',
    fontSize: '22pt',
    marginLeft:'10%',
    display: 'none',
    fontFamily: 'Tw Cen MT',
    fontStyle:'bold',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawer: {
    color:'#505A5B',
    width: drawerWidth,
    flexShrink: 0,

  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    backgroundcolor: '#000000',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  nested:{
    paddingLeft: theme.spacing(4),

  },
  nested1:{
    paddingLeft: theme.spacing(6),

  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const theme = useTheme();

  const [open1, setOpen1] = React.useState(false);

  const handleClick1 = () => {
    setOpen1(!open1);

  };
  const [open2, setOpen2] = React.useState(false);

  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const [open3, setOpen3] = React.useState(false);

  const handleClick3 = () => {
    setOpen3(!open3);
  };
  const [open4, setOpen4] = React.useState(false);

  const handleClick4 = () => {
    setOpen4(!open4);
  };
  const [open5, setOpen5] = React.useState(false);

  const handleClick5 = () => {
    setOpen5(!open5);
  };
  const [open6, setOpen6] = React.useState(false);

  const handleClick6 = () => {
    setOpen6(!open6);
  };
  const [open7, setOpen7] = React.useState(false);

  const handleClick7 = () => {
    setOpen7(!open7);
  };
  const [open8, setOpen8] = React.useState(false);

  const handleClick8 = () => {
    setOpen8(!open8);
  };
  const [openZ, setOpenZ] = React.useState(false);

  const handleClickZ = () => {
    setOpenZ(!openZ);
  };
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  window.addEventListener('resize', showButton);
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Déconnecter</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow} >
      <AppBar position="static"  style={{ background: '#F5F7F6'}}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="#7E7E7E"
            aria-label="open drawer"
            
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
         
          <Link to="/Accueil" className="image" style={{
                cursor: "pointer",
                display: "flex",
                margin : '20px',
            }}>
          
            <img src={imageName} alt="IntellBoard - Accueil"/>

          </Link>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop} >
            
            <IconButton
              edge="end"
              aria-label="Le compte d'utilisateur courant"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="disabeld"
            >
              <AccountCircle />
              <Typography style={{margin:'20px', color:'#515151', fontSize: 20 , fontFamily: 'Tw Cen MT'}}> PrenomUser1 NomUser1</Typography> 
            </IconButton>
          </div>
          <div className={classes.sectionMobile} >
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose} >
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button  component="a" href="/Accueil">
              <ListItemIcon><HomeIcon/> </ListItemIcon>
              <ListItemText primary="Accueil" />
            </ListItem>
            <ListItem button onClick={handleClickZ}>
              <ListItemIcon><BarChartIcon/></ListItemIcon>
              <ListItemText primary="Dashboard" />
              {openZ ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
              <Collapse in={openZ} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested} component="a" href="/Dashboard-Social">
                    <ListItemIcon>
                      <SupervisorAccountIcon />
                    </ListItemIcon>
                    <ListItemText primary="Social" />
                    </ListItem>
                    <ListItem button className={classes.nested} component="a" href="/Dashboard-Environnement">
                    <ListItemIcon>
                      <EcoIcon />
                    </ListItemIcon>
                    <ListItemText primary="Environnemental" />
                    </ListItem>
                    <ListItem button className={classes.nested} component="a" href="Dashboard-Informatique">
                    <ListItemIcon>
                      <ComputerIcon />
                    </ListItemIcon>
                    <ListItemText primary="Informatique" />
                    </ListItem>
                    <ListItem button className={classes.nested} component="a" href="/Dashboard-Qualite">
                    <ListItemIcon>
                      <PolicyIcon />
                    </ListItemIcon>
                    <ListItemText primary="Qualité" />
                    </ListItem>
                    <ListItem button className={classes.nested} component="a" href="/Dashboard-Culturel">
                    <ListItemIcon>
                      <BubbleChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Culturel" />
                    </ListItem>
                    <ListItem button className={classes.nested} component="a" href="/Dashboard-Productivite">
                    <ListItemIcon>
                      <CheckCircleOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary="Productivité" />
                    </ListItem>
                    <ListItem button className={classes.nested} component="a" href="/Dashboard-Economie">
                    <ListItemIcon>
                      <MonetizationOnIcon />
                    </ListItemIcon>
                    <ListItemText primary="Economique / Financier" />
                    </ListItem>
                  </List>
              </Collapse>
            <ListItem button component="a" href="/Rapport">
              <ListItemIcon><FileCopyIcon/>  </ListItemIcon>
              <ListItemText primary="Rapport" />
            </ListItem>
            <ListItem button  onClick={handleClick1}>
              <ListItemIcon> <InboxIcon/> </ListItemIcon>
              <ListItemText primary="Alimentation" />
              {open1 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
              <Collapse in={open1} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button  onClick={handleClick2} className={classes.nested}>
                    <ListItemIcon>
                      <SupervisorAccountIcon />
                    </ListItemIcon>
                    <ListItemText primary="Social" />
                    {open2 ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                    <Collapse in={open2} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItem button className={classes.nested1} component='a' href='/Alimentation/Employes'>
                          <ListItemIcon>
                          </ListItemIcon>
                          <ListItemText primary="Employés" />
                        </ListItem>
                        <ListItem button className={classes.nested1}>
                          <ListItemIcon>
                          </ListItemIcon>
                          <ListItemText primary="Formation" />
                        </ListItem>
                        <ListItem button className={classes.nested1}>
                          <ListItemIcon>
                          </ListItemIcon>
                          <ListItemText primary="Accident" />
                        </ListItem>
                        <ListItem button className={classes.nested1}>
                          <ListItemIcon>
                          </ListItemIcon>
                          <ListItemText primary="Stagaires" />
                        </ListItem>
                        <ListItem button className={classes.nested1}>
                          <ListItemIcon>
                          </ListItemIcon>
                          <ListItemText primary="Recrutement" />
                        </ListItem>
                        </List>
                      </Collapse>
                  <ListItem button onClick={handleClick3}  className={classes.nested}>
                    <ListItemIcon>
                      <PolicyIcon />
                    </ListItemIcon>
                    <ListItemText primary="Qualité" />
                    {open3 ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                    <Collapse in={open3} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItem button className={classes.nested1}>
                          <ListItemIcon>
                          </ListItemIcon>
                          <ListItemText primary="Clients" />
                        </ListItem>
                      </List>
                      </Collapse>
                  <ListItem button onClick={handleClick4} className={classes.nested}>
                    <ListItemIcon>
                      <EcoIcon />
                    </ListItemIcon>
                    <ListItemText primary="Environnemental" />
                    {open4 ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                    <Collapse in={open4} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItem button className={classes.nested1}>
                          <ListItemIcon>
                          </ListItemIcon>
                          <ListItemText primary="Consommation" />
                        </ListItem>
                        <ListItem button className={classes.nested1}>
                          <ListItemIcon>
                          </ListItemIcon>
                          <ListItemText primary="Dechets" />
                        </ListItem>
                      </List>
                      </Collapse>
                  <ListItem button onClick={handleClick5} className={classes.nested}>
                    <ListItemIcon>
                      <ComputerIcon />
                    </ListItemIcon>
                    <ListItemText primary="Informatique / Digital" />
                    {open5 ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                    <Collapse in={open5} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItem button className={classes.nested1}>
                          <ListItemIcon>
                          </ListItemIcon>
                          <ListItemText primary="Incidents" />
                        </ListItem>
                        <ListItem button className={classes.nested1}>
                          <ListItemIcon>
                          </ListItemIcon>
                          <ListItemText primary="Equipements" />
                        </ListItem>
                      </List>
                      </Collapse>
                  <ListItem button onClick={handleClick6} className={classes.nested}>
                    <ListItemIcon>
                      <CheckCircleOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary="Productivité" />
                    {open6 ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                    <Collapse in={open6} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItem button className={classes.nested1}>
                          <ListItemIcon>
                          </ListItemIcon>
                          <ListItemText primary="Performance" />
                        </ListItem>
                      </List>
                      </Collapse>
                  <ListItem button onClick={handleClick7} className={classes.nested}>
                    <ListItemIcon>
                      <MonetizationOnIcon />
                    </ListItemIcon>
                    <ListItemText primary="Economique / Finance" />
                    {open7 ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                    <Collapse in={open7} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItem button className={classes.nested1}>
                          <ListItemIcon>
                          </ListItemIcon>
                          <ListItemText primary="Inventaire (Stock)" />
                        </ListItem>
                        <ListItem button className={classes.nested1}>
                          <ListItemIcon>
                          </ListItemIcon>
                          <ListItemText primary="Produits" />
                        </ListItem>
                      </List>
                      </Collapse>
                  <ListItem button onClick={handleClick8} className={classes.nested}>
                    <ListItemIcon>
                      <BubbleChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Culturel" />
                  {open8 ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                    <Collapse in={open8} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItem button className={classes.nested1}>
                          <ListItemIcon>
                          </ListItemIcon>
                          <ListItemText primary="Satisfaction" />
                        </ListItem>
                      </List>
                      </Collapse>
                </List>
              </Collapse>
        </List>
        
      </Drawer>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
