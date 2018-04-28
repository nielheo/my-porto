import { withStyles } from 'material-ui/styles';
import { TableCell } from 'material-ui/Table';

const CustomTableCell = withStyles(theme => ({
  head: {
    //backgroundColor: theme.palette.common.black,
    //color: theme.palette.common.white,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

export default CustomTableCell