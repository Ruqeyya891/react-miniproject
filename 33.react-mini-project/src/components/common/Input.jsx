import { TextField } from '@mui/material'
import { forwardRef } from 'react'

const Input = forwardRef(({ label, error, helperText, ...props }, ref) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      label={label}
      error={!!error}
      helperText={helperText || error}
      inputRef={ref}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: 0,
          '&:hover fieldset': {
            borderColor: '#82ae46',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#82ae46',
          },
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: '#82ae46',
        },
        mb: 2
      }}
      {...props}
    />
  )
})

Input.displayName = 'Input'

export default Input