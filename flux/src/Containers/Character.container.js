import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchCharacters, getPageCharacters } from '../Store/actions'
import CharactersComponent from '../Components/CharactersList'

const mapStateToProps = state => {
    const { characters, loading } = state.characters;
    const { info } = state.info;
    return {
        characters,
        info,
        loading
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            fetchCharacters,
            getPageCharacters
        },
        dispatch
    );

const CharactersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CharactersComponent)

export default CharactersContainer;