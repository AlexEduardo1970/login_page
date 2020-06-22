import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, changeValue } from '../../store/actions/auth';
import { withStyles } from '@material-ui/core/styles';
import Container  from '@material-ui/core/Container';
import  Button  from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { grey } from '@material-ui/core/colors';
import Loading from '../../components/loading/Loading';
import Notify from '../../components/loading/Loading';

const ColorButton = withStyles(theme => ({
    root: {
        color: '#fff',
        backgroundColor: grey[900],  //'#1C1E21'
           '&:hover': {
            backgroundColor: grey[900] 
        }
    }
}))(Button);

export class Login extends Component {

    login = () => {
        const { credentials } = this.props;
        this.props.login(credentials).then(() => {

        })
    }

    render() {
        return (
            <div>
                <Loading />
                <Notify />
                <Container component="main" maxWidth="xs">
                    <div className="mt-3 mt-md-5">
                        <div className="text-center">
                            <img src="logo512.png" alt="logoReact"
                                width="60%"
                            />
                            <Typography className="mt-3 font-wheight-normal" component="h1" variant="h6">
                                Entre com seu Login e Senha
                            </Typography>
                        </div>

                        <div className="mt-4">
                            <TextField 
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="username"
                                type="email"
                                value={this.props.credentials.username}
                                onChange={(text) => this.props.changeValue({username: text.target.value})}
                                />

                            <TextField 
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                label="Senha"
                                name="password"
                                type="password"
                                value={this.props.credentials.password}
                                onChange={(text) => this.props.changeValue({password: text.target.value})}
                            />

                            <Button 
                                type="button"
                                variant="contained"
                                fullWidth
                                color="primary"
                                size="large"
                                className="mb-3 mb-md-4 mt-4"
                                onClick={() => this.login()}
                            >
                                Entrar
                            </Button>

                            <Link href="/register">
                                <ColorButton
                                    type="button"
                                    fullWidth
                                    size="large"
                                    variant="contained"
                                    className="mt-md-4"
                                >
                                    Registre-se
                                </ColorButton>
                            </Link>

                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    credentials: state.authReducer.credentials,
});

const mapDispatchToProps = dispatch => ({
    login: (credentials) => dispatch(login(credentials)),
    changeValue: (value) => dispatch(changeValue(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);