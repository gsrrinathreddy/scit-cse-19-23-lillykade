import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualifications() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="RGR Siddhanthi" srsc="hhttps://cdn.w600.comps.canstockphoto.com/education-icon-vector-female-student-eps-vectors_csp70607738.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Sree Chaitanya Institute of Technological Sciences"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                65% CGPA
              </Typography>
              {" — B.Tech Computer Scinece And Engineering"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sri Aadarsh" src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-vector-female-student-icon-png-image_3787628.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="SR Junior College, Hanamkonda"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                86% CGPA
              </Typography>
              {" — Intermediate (MPC)"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sai SI" src="https://tse1.mm.bing.net/th?id=OIP.L_YrUAaAmUKRDOzSM7a0FgHaG_&pid=Api&P=0" />
        </ListItemAvatar>
        <ListItemText
          primary="Vidhyadhari High School"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                95% CGPA
              </Typography>
              {' —  Secondory Schol Education'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}