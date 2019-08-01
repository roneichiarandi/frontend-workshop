import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchCharacters, fetchPageCharacters } from '../Store/actions'
import CharactersComponent from '../Components/CharactersList'

const mapStateToProps = state => {
    const { list, info, loading } = state.characters;
    return {
        list,
        info,
        loading
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            fetchCharacters,
            fetchPageCharacters
        },
        dispatch
    );

const CharactersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CharactersComponent)

export default CharactersContainer;