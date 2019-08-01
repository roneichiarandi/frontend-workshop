import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import React, { Component } from 'react'
import TablePaginationActions from './partial/TablePaginationActions'
import {fetchPageCharacters} from "../Store/actions";

class CharactersList extends Component {
    componentDidMount() {
        this.props.fetchCharacters()
    }

    renderCharacters = characters => (
        <TableBody>
            {characters.map(row => (
                <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                        {row.id}
                    </TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.gender}</TableCell>
                    <TableCell align="left">{row.origin}</TableCell>
                    <TableCell align="left">{row.status}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    );

    render() {
        const { list, info, fetchPageCharacters } = this.props

        const classes = makeStyles(theme => ({
            root: {
                width: '100%',
                marginTop: theme.spacing(3),
            },
            table: {
                minWidth: 500,
            },
            tableWrapper: {
                overflowX: 'auto',
            },
        }));

        const page =  parseInt(info.next - 1)
        const count = info.count

        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Gender</TableCell>
                            <TableCell align="left">Origin</TableCell>
                            <TableCell align="left">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    {list && list.length > 0
                        ? this.renderCharacters(list)
                        : (<TableBody />)
                    }
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                colSpan={5}
                                count={count}
                                rowsPerPage={20}
                                page={page}
                                SelectProps={{
                                    inputProps: { 'aria-label': 'rows per page' },
                                    native: true,
                                }}
                                onChangePage={(event, newPage) => {
                                    fetchPageCharacters(newPage)
                                }}
                                onChangeRowsPerPage={event => {
                                    console.log(event)
                                }}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </Paper>
        )
    }
}

export default CharactersList
