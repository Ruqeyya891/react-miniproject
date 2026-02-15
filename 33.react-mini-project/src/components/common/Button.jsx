import { Button as MuiButton } from '@mui/material'

function Button({ children, variant = 'contained', color = 'primary', ...props }) {
  const colors = {
    primary: '#82ae46',
    secondary: '#2196f3',
    danger: '#f44336'
  }

  return (
    <MuiButton
      variant={variant}
      sx={{
        backgroundColor: variant === 'contained' ? colors[color] : 'transparent',
        color: variant === 'contained' ? 'white' : colors[color],
        borderColor: colors[color],
        borderRadius: color === 'primary' ? 20 : 0,
        px: 3,
        py: 1,
        textTransform: 'none',
        fontWeight: 500,
        '&:hover': {
          backgroundColor: variant === 'contained' ? '#6b8c3a' : 'rgba(130, 174, 70, 0.1)',
          borderColor: colors[color],
        },
      }}
      {...props}
    >
      {children}
    </MuiButton>
  )
}

export default Button