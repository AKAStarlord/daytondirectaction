import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open }) => {
    return (
        <StyledMenu open={open}>
            <a href="/">
                <span role="img" aria-label="about us">&#x1F5A4;</span>
                About Us
            </a>
            <a href="/">
                <span role="img" aria-label="get involved">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
                Get Involved
            </a>
            <a href="/">
                <span role="img" aria-label="donate">&#x1f4b8;</span>
                Donate
            </a>
            <a href="/">
                <span role="img" aria-label="education">&#x1F4D4;</span>
                Education
            </a>
            <a href="/">
                <span role="img" aria-label="contact">&#x1f4e9;</span>
                Contact
            </a>
        </StyledMenu>
    )
}

Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu;