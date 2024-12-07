import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(2),
    },
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: theme.palette.primary.main, // 使用主题的主色
      color: '#fff',
      '&:hover': {
      backgroundColor: theme.palette.primary.dark, // 主色的深色版本
    },
    },
    googleButton: {
      marginBottom: theme.spacing(2),
      backgroundColor: theme.palette.error.main, // 使用错误颜色（如红色）
      color: '#fff',
      '&:hover': {
      backgroundColor: theme.palette.error.dark, // 错误颜色的深色版本
    },
    },
  }));

  export default useStyle;

