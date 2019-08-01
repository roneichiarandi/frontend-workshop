import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';


import React, { Component } from 'react'

class CharactersList extends Component {
    componentDidMount() {
        this.props.fetchCharacters()
    }

    TablePaginationActions = props => {
        const classes = makeStyles(theme => ({
            root: {
                flexShrink: 0,
                color: theme.palette.text.secondary,
                marginLeft: theme.spacing(2.5),
            },
        }));
        const theme = useTheme();
        const { count, page, rowsPerPage, onChangePage } = props;

        function handleFirstPageButtonClick(event) {
            onChangePage(event, 0);
        }

        function handleBackButtonClick(event) {
            onChangePage(event, page - 1);
        }

        function handleNextButtonClick(event) {
            onChangePage(event, page + 1);
        }

        function handleLastPageButtonClick(event) {
            onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
        }

        return (
            <div className={classes.root}>
                <IconButton
                    onClick={handleFirstPageButtonClick}
                    disabled={page === 0}
                    aria-label="first page"
                >
                    {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
                </IconButton>
                <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                </IconButton>
                <IconButton
                    onClick={handleNextButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="next page"
                >
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </IconButton>
                <IconButton
                    onClick={handleLastPageButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="last page"
                >
                    {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
                </IconButton>
            </div>
        );
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
        const { characters, info } = this.props
        const classes = makeStyles(theme => ({
            root: {
                width: '100%',
                marginTop: theme.spacing(3),
                overflowX: 'auto',
            },
            table: {
                minWidth: 650,
            },
        }))

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
                    {characters && characters.length > 0
                        ? this.renderCharacters(characters)
                        : (<TableBody />)
                    }
                    <TablePagination
                        colSpan={3}
                        count={info.count}
                        rowsPerPage={20}
                        page={info.page}
                        SelectProps={{
                            inputProps: { 'aria-label': 'rows per page' },
                            native: true,
                        }}
                        onChangePage={this.props.getPageCharacters()}
                        ActionsComponent={this.TablePaginationActions()}
                    />
                </Table>
            </Paper>
        )
    }
}

export default CharactersList
