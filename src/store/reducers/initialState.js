export default {
    auth: {
        token: {},
        credentials: {
            username: '',
            password: ''
        },
        isLoading: {
            active: false,
            msg: null
        },
        success: false,
        error: null
    },
    loading: {
        open: false,
        msg: 'Loading...',
    },
    notify: {
        open: false,
        class: 'success',
        vertical: 'top',
        horizontal: 'center',
        time: 3000,
        msg: ''
    }
}