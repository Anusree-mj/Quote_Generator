import { Box, Button, Typography } from '@mui/material'
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import { useState } from 'react';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const QuoteComponent = () => {
    const [quote, setQuote] = useState({
        text: 'quoteee',
        author: 'author'
    })
    return (
        <Box sx={{
            width: '30rem', maxWidth: '95%',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            backgroundColor: '#212226', p: 2, overflow: 'hidden'

        }}>
            <Box sx={{
                maxWidth: '100%', width: '30rem',
                display: "flex", alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Typography sx={{
                    fontSize: '1.3rem',
                    fontWeight: '800'
                }}>Quote</Typography>
                <FavoriteSharpIcon sx={{
                    color: '#1b9b96',
                    backgroundColor: '#00000052', p: '0.2rem',
                    cursor: 'pointer'

                }} />
            </Box>
            <Box sx={{
                display: 'flex', flexDirection: 'column',
                maxWidth: '80%', width: '30rem',
            }}>
                <FormatQuoteIcon sx={{
                    transform: 'rotate(180deg)',
                    alignSelf: 'flex-start'
                }} />
                <Typography sx={{ textAlign: 'start', ml: 5, mt: 2, mb: 2 }}>{quote.text}</Typography>
                <Typography sx={{ textAlign: 'end', mb: 2, mr: 5 }}>- {quote.author}</Typography>
                <FormatQuoteIcon sx={{ alignSelf: 'flex-end' }} />
                {/* <Box sx={{
                    position: 'absolute', borderRadius: '50%'
                }}>
                    <Box>
                    </Box>
                    <Box>
                    </Box>
                    <Box>
                    </Box>
                </Box> */}
                <Box sx={{
                    display: 'flex', mt: 2,
                    alignItems: 'center', justifyContent: 'space-around',
                }}>
                    <Button variant="contained" sx={{
                        background: 'linear-gradient(to left, #553ddd, #7f69e8)',
                        borderRadius: '0.4rem', width: '10rem', p: '4px'
                    }}>New Quote</Button>
                    <Button variant="contained" sx={{
                        background: 'linear-gradient(to left, #2e6f79, #1b9b96)',
                        borderRadius: '0.4rem', width: '10rem', p: '4px'
                    }}>Add to favourites</Button>
                </Box>
            </Box>
        </Box >
    )
}

export default QuoteComponent