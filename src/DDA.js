import React, {useState, useRef} from 'react';
import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from './global';
import {theme} from './theme';
import {Burger, Menu} from './components';
import FocusLock from 'react-focus-lock';
import { useOnClickOutside } from './hooks';

function DDA() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    const menuId = "main-menu";

    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles/>
                <div ref={node}>
                    <FocusLock disabled={!open}>
                        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                        <Menu open={open} setOpen={setOpen} id={menuId} />
                    </FocusLock>
                </div>
                <div>
                    <h1>dayton direct action.</h1>
                    <p>Mutual aid to lessen the suffering of Dayton's homeless.</p>
                </div>
            </>
        </ThemeProvider>
    );
}

export default DDA;