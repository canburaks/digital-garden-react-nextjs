export const boxShadow = {
  boxShadow: '0 1px 2px rgba(0,0,0,0.15)',
  transition: 'all 0.3s ease-in-out',
  '&::after': {
    content: '',
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: '100%',
    opacity: 0,
    boxShadow: '0 5px 8px rgba(0,0,0,0.2)',
    transition: 'opacity 0.3s ease-in-out',
  },
  '&:hover': {
    transform: 'scale(1.02, 1.02)',
  },
  '&:hover::after': {
    opacity: 1,
  },
};
