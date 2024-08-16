import { Box, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { FavouriteContext } from "./contexts/favouriteContexts";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const FavouritesComponent = () => {
  const navigate = useNavigate()
  const { favourites, removeFavourites } = useContext(FavouriteContext)

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center', alignItems: 'center',
      minHeight: '90vh',
    }}>
      <Box sx={{
        width: '30rem', maxWidth: '90%', minHeight: '40vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        background: 'linear-gradient(to left, #1b9b96, #2e6f79)',
        p: 2, boxShadow: '-4px 7px 7px rgba(37, -14, 0, 1.1)',
        borderRadius: '0.6rem'
      }}>
        <Box sx={{
          maxWidth: '100%', width: '30rem', mb: 2,
          display: "flex", alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}>
          <Typography sx={{
            fontSize: '1.3rem',
            fontWeight: '800'
          }}>Favourites</Typography>
          <CloseIcon sx={{
            color: 'white',
            backgroundColor: '#00000052', p: '0.1rem',
            cursor: 'pointer'

          }} onClick={() => navigate('/')} />
        </Box>
        <Box sx={{
          width: '30rem', maxWidth: '90%', minHeight: '30vh',
          alignSelf: 'self-start',
        }}>
          {favourites && favourites.length !== 0 ? favourites.map((favourite, index) => (
            <Box key={index} sx={{ mb: 1 }}>
              <Box sx={{
                display: 'flex', alignItems: 'center',
              }}>
                <CancelOutlinedIcon sx={{ color: '#8a0000', fontSize: '1.2rem' }}
                  onClick={() => { removeFavourites(favourite!) }} />
                <FormatQuoteIcon sx={{
                  ml: 1, fontSize: '0.7rem',
                  transform: 'rotate(180deg)',
                  alignSelf: 'flex-start'
                }} />
                <Typography sx={{ fontSize: '0.94rem' }}>
                  {favourite.text}
                  <FormatQuoteIcon sx={{ mr: 1, alignSelf: 'flex-end', fontSize: '0.7rem' }} />
                </Typography>
              </Box>
              <Typography sx={{ textAlign: 'end', fontSize: '0.94rem',m:0 ,p:0}}>
                - {favourite.author}
              </Typography>
            </Box >
          )) : (
            <Typography sx={{ textAlign: 'center' }}>
              No Favourites Yet !
            </Typography>
          )}
        </Box>
      </Box >
    </Box>
  )
}

export default FavouritesComponent