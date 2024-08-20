import { Box, Button, Typography } from '@mui/material'
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import { useEffect, useState, useContext } from 'react';
import { FavouriteContext } from './contexts/favouriteContexts';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { QuoteType } from './types';
import { toast } from 'react-toastify';

const QuoteComponent = () => {
    const [quote, setQuote] = useState<QuoteType>()
    const navigate = useNavigate()
    const { addFavourites, favourites } = useContext(FavouriteContext)

    useEffect(() => {
        getQuotes()
    }, [])

    const getQuotes = async () => {
        try {
            const { data } = await axios.get('https://zenquotes.io/api/quotes');
            const randomQuote = data[Math.floor(Math.random() * data.length)];

            setQuote({
                text: randomQuote.q,
                author: randomQuote.a
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleAddFavourites = (quote: QuoteType) => {
        const isFavourite = favourites.some(
            (favourite) => favourite.text === quote.text && favourite.author === quote.author
        );
        if (isFavourite) {
            toast.error('Already added in favourites!')
            return;
        }
        addFavourites(quote)
        toast.success('Added to favourites!')
    }
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
                backgroundColor: '#212226', p: 2,
                boxShadow: '-4px 7px 7px rgba(37, -14, 0, 1.1)',
                borderRadius: '0.6rem'

            }}>
                <Box sx={{
                    maxWidth: '100%', width: '30rem', mb: 2,
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

                    }} onClick={() => navigate('/favourites')} />
                </Box>
                <Box sx={{
                    display: 'flex', flexDirection: 'column',
                    maxWidth: '80%', width: '30rem',
                }}>
                    <FormatQuoteIcon sx={{
                        transform: 'rotate(180deg)',
                        alignSelf: 'flex-start'
                    }} />
                    <Typography sx={{ textAlign: 'start', ml: 5, mt: 2, mb: 2 }}>{quote?.text}</Typography>
                    <Typography sx={{ textAlign: 'end', mb: 2, mr: 5 }}>- {quote?.author}</Typography>
                    <FormatQuoteIcon sx={{ alignSelf: 'flex-end', }} />
                </Box>
                <Box sx={{
                    display: 'flex', mt: 3, width: '100%',
                    alignItems: 'center', justifyContent: 'space-around',
                }}>
                    <Button variant="contained" sx={{
                        background: 'linear-gradient(to left, #553ddd, #7f69e8)',
                        borderRadius: '0.4rem', width: '10rem', p: '4px'
                    }} onClick={getQuotes}
                    >New Quote</Button>
                    <Button variant="contained" sx={{
                        background: 'linear-gradient(to left, #2e6f79, #1b9b96)',
                        borderRadius: '0.4rem', width: '10rem', p: '4px'
                    }} onClick={() => { handleAddFavourites(quote!) }}
                    >Add to favourites</Button>
                </Box>
            </Box >
        </Box>
    )
}

export default QuoteComponent