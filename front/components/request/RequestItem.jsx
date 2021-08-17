import styled from "styled-components";


const StyledItem = styled.ul`
    width: 300px;
    height: 300px;
    margin: 10px;
    border: 1px solid blue;
    padding: 0.625rem;
    border-radius: 1.25rem;

    & > .content {
        font-size: 2rem;
        font-weight: 800;
    }
    
`



const RequestItem = (props) => {
    return (
        <StyledItem>
            <li>
                <span>{props.name}님의 '해줘'</span>
                <span>{props.date}</span>
            </li>
            <li className="content">
                
                    {props.content}
                
            </li>
            <li>

            </li>
        </StyledItem>
    );
}

export default RequestItem;