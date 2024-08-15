import { Box, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";

const FavouritesComponent = () => {
  const navigate = useNavigate()

  return (
    <Box sx={{
      width: '30rem', maxWidth: '95%', minHeight: '40vh',
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
        width: '100%',minHeight:'25vh',
      }}>
      
      </Box>
    </Box >
  )
}

export default FavouritesComponent