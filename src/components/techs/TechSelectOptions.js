import React, {useEffect, Fragment} from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/techActions'


const TechSelectOptions = ({getTechs, tech: {loading, techs}}) => {
    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, [])

    return (
        <Fragment>
            {
                !loading && 
                techs !== null && 
                techs.map(t => ( <option key={t.id} value={`${t.firstName} ${t.lastName}`}>{t.firstName} {t.lastName}</option> ))
            }
        </Fragment>       
    )
}


TechSelectOptions.propTypes = { 
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    tech: state.tech
});

export default connect(mapStateToProps, { getTechs })(TechSelectOptions);
