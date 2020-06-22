import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changeloading } from '../../store/actions/loading';

import Modal from '@material-ui/core/Modal';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import  withStyles  from '@material-ui/core/styles/withStyles';

const styles = {
    progress: {
        marginRight: '15px'
    },
    modal: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    paper: {
        backgroundColor: '#fff',
        padding: '15px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        outline: 'none'
    }
}

export class Loading extends Component {
   /* static propTypes = {
        prop: PropTypes
    }
   */
    handleClose = () => {
        this.props.changeloading({
            open: false
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <Modal
                open={this.props.loading.open}
                onClose={this.handleClose}
                className={classes.modal}
            >
                <div className={classes.paper}>
                    <CircularProgress size={20} className={classes.progress}/>
                    <Typography variant="subtitle1">
                        {this.props.loading.msg}
                    </Typography>
                </div>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => ({
    loading: state.loadingReducer
})

const mapDispatchToProps = dispatch => ({
    changeloading: (value) => dispatch(changeloading(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Loading))
