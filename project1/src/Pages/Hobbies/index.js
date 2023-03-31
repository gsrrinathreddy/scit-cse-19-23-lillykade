import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://tse2.mm.bing.net/th?id=OIP.YpoUy0DhTM_OpD0mHGSLWwHaFj&pid=Api&P=0',
    title: 'Listening Music',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://tse2.mm.bing.net/th?id=OIP.EwoNyRbPip-R3CAfYlBp4QHaE8&pid=Api&P=0',
    title: 'Gardening',
    
  },
  {
    img: 'https://tse2.mm.bing.net/th?id=OIP.U5SK6rDPROxJOxN-nvtkyQHaEK&pid=Api&P=0',
    title: 'Arts and Crafts',
    
  },
  {
    img: ' https://tse2.mm.bing.net/th?id=OIP.vPIvPHyLczFh5gTU93ZfeQHaFB&pid=Api&P=0',
    title: 'Cooking',
    
    cols: 2,
  },
  {
    img: 'https://tse4.mm.bing.net/th?id=OIP.xc62UgKHc_j24cjZ9bif7wHaE8&pid=Api&P=0',
    title: 'Dancing',
    
    cols: 2,
  },
  {
    img: 'https://i.pinimg.com/736x/8d/bd/6c/8dbd6c6f4d0bf1e9044300f4000bfb8e.jpg',
    title: 'Excersicing',
    
    rows: 2,
    cols: 2,
    featured: true,
  },  
];