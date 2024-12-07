// import { makeStyles } from "@mui/styles";

// export default makeStyles(()=>({
//     appBar: {
//         borderRadius: 15,
//         margin: '30px 0',
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//       },
//       heading: {
//         color: 'rgba(0,183,255, 1)',
//       },
//       image: {
//         marginLeft: '15px',
//       },
//       // [theme.breakpoints.down('sm')]:{

//       //   mainContainer: {
//       //     flexDirection:"column-reverse"
//       //   }
//       // },
      

// }));

export default makeStyles((theme) => ({
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse',
    },
  },
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
    backgroundColor: '#ffffff',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    fontFamily: 'Roboto, Arial, sans-serif',
    fontWeight: 'bold',
  },
  image: {
    marginLeft: '15px',
    borderRadius: '50%',
  },
}));
