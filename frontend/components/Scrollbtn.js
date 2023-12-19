import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Tooltip from '@mui/material/Tooltip';



export default function Scrollbtn() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setShowButton(scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Tooltip title="Voltar ao topo">
            <Button
                onClick={handleScrollTop}
                style={{
                    position: 'fixed',
                    bottom: 16,
                    backgroundColor: '#fff',
                    right: 16,
                    display: showButton ? 'block' : 'none',
                }}
            >
                <KeyboardArrowUpIcon />
            </Button>
        </Tooltip>
    );
};

