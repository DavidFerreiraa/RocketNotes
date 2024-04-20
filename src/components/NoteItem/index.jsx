import { FiPlus, FiX} from 'react-icons/fi';

import { Container } from './styles';

export function NoteItem({ isNew = false, value, onClick, ...rest}){
    return(
        <Container $isnew={isNew}>
            <input
                type='text'
                value={value}
                readOnly={!isNew}
                {...rest}
            />

            <button
                onClick={onClick}
                type='button'
            >
                {isNew? <FiPlus/> : <FiX/>}
            </button>
        </Container>
    );
}