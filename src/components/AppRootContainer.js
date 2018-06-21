import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import AppRoot from 'components/AppRoot'

export const mapStateToProps = (state, ownProps, history) => {
    const props = {
        url: state.app.router.currentUrl
    }
    return props
}

export const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AppRoot))
