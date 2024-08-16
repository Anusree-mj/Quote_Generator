import { Box, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { FavouriteContext } from "./contexts/favouriteContexts";

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
        p: 2, overflow: 'hidden'

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
            backgroundColor: '#00000052', p: '0.2rem',
            cursor: 'pointer'

          }} onClick={() => navigate('/')} />
        </Box>
        <Box sx={{
          width: '30rem', maxWidth: '90%', minHeight: '25vh',
          alignSelf: 'self-start',
          border: '1px solid red'
        }}>
          {favourites && favourites.length !== 0 ? favourites.map((favourite, index) => (
            <Box key={index} sx={{ mb: 1 }}>
              <Box sx={{
                display: 'flex', alignItems: 'center',
              }}>
                <CancelOutlinedIcon sx={{ color: '#8a0000' }}
                  onClick={() => { removeFavourites(favourite!) }} />
                <Typography sx={{ ml: 2 }}>
                  {favourite.text}
                </Typography>
              </Box>
              <Typography sx={{ textAlign: 'end' }}>
                {favourite.author}
              </Typography>
            </Box >
          )) : (
            <Typography sx={{ textAlign: 'center' }}>
              No Favourites Yet!
            </Typography>
          )}
        </Box>
      </Box >
    </Box>
  )
}

export default FavouritesComponent