import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SportsMotorsportsIcon from '@material-ui/icons/SportsMotorsports';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import LockIcon from '@material-ui/icons/Lock';
import { useHistory, useLocation } from 'react-router-dom';
import LeakAddIcon from '@material-ui/icons/LeakAdd';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

export default function TemporaryDrawer({toggle, isOpen, anchor="left"}) {
  const classes = useStyles();

  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const history = useHistory();
  const handleChangeFilter = (query)=>{
    history.replace(location.pathname + query);
  }

  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    toggle()
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        <ListItem button onClick={()=>handleChangeFilter("")} selected ={search.get("category") == null} color="primary">
          <ListItemIcon>
            <AllInclusiveIcon/>
          </ListItemIcon>
          <ListItemText>Все товары</ListItemText>
        </ListItem>
        <ListItem button onClick={()=>handleChangeFilter("?category=Boards")} selected={search.get("category")==="boards"} color="primary">
        <ListItemIcon>
            <ConfirmationNumberIcon/>
          </ListItemIcon>
          <ListItemText>Борды</ListItemText>
        </ListItem>
        <ListItem button onClick={()=>handleChangeFilter("?category=Glasses")} selected={search.get("category")==="glasses"} color="primary">
        <ListItemIcon>
            <LeakAddIcon/>
          </ListItemIcon>
          <ListItemText>Очки</ListItemText>
        </ListItem>
        <ListItem button onClick={()=>handleChangeFilter("?category=Holders")} selected={search.get("category")==="holders"} color="primary">
        <ListItemIcon>
            <LockIcon/>
          </ListItemIcon>
          <ListItemText>Крепления</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  

  return (
    <div>
      <Drawer anchor={anchor} open={isOpen} onClose={toggleDrawer}>
        {list(anchor)}
      </Drawer>
    </div>
  );
}