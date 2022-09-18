import { Box, CircularProgress } from '@mui/material'

export const Loading = ({height, sx}: Record<string, any>) => {
  return (
      <Box
        sx={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          width: 1, height: height || '100%', zIndex: 999, bgcolor: 'warmGray.main',
          ...sx
        }}
      >
        <CircularProgress/>
      </Box>

  )
}
