import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { filterCharacters } from '../Store/actions'
import HeaderComponent from '../Components/Header'


const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            filterCharacters
        },
        dispatch
    );

const HeaderContainer = connect(
    null,
    mapDispatchToProps
)(HeaderComponent)

export default HeaderContainer;