import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import ImageSearch from '@material-ui/icons/ImageSearch';

const Navbar = () => {
    return(
        <div>
            <AppBar position="static" style={{ background: '#2E3B55' }}>
                <Toolbar>
                    <ImageSearch style={{ marginRight: 10}} />
                    <Typography variant="title" color="inherit">
                       Image Finder
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Navbar;
