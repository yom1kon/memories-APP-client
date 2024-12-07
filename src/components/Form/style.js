
// import { blue } from '@mui/material/colors';
// import { makeStyles } from '@mui/styles';

// export default makeStyles(() => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: '2px',
//     },
//   },
//   paper: {
//     padding: '2px',
//   },
//   form: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   },
//   fileInput: {
//     width: '97%',
//     margin: '10px 0',
//   },
//   buttonSubmit: {
//     marginBottom: 10,
//   },
// }));

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '10px',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: '#0d47a1 !important', // 蓝色背景
    color: '#fff !important', // 白色文字
    '&:hover': {
      backgroundColor: '#1565c0 !important', // 深蓝色悬停效果
    },
  },
  buttonClear: {
    marginBottom: 10,
    backgroundColor: '#b71c1c !important', // 红色背景
    color: '#fff !important', // 白色文字
    '&:hover': {
      backgroundColor: '#d32f2f !important', // 深红色悬停效果
    },
  },
  [theme.breakpoints.down('sm')]: {
    form: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    buttonSubmit: {
      width: '100%',
    },
    buttonClear: {
      width: '100%',
    },
  },
}));

export default useStyles;
