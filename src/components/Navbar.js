"use client";

import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from '@mui/material/Link';
import Badge from '@mui/material/Badge';
import Paper from '@mui/material/Paper';

const pages = ['// home', '//expertise', '// work', '// experience', '// contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar( { scrollToHome, scrollToExpertise, scrollToWork, scrollToExperience, scrollToContact }) {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const [paperColor, setPaperColor] = useState('#141f2b');
	const [textColor, setTextColor] = useState('#fff');
	const [desktopLogo, setDesktopLogo] = useState('Ocolus1');

    useEffect(() => {
        // Function to handle scroll event
        const handleScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset;
            // Check if scroll position is greater than a certain height (e.g., 100)
            if (scrollY > 100) {
                setPaperColor('rgba(26, 24, 28, 0.5)');
                setTextColor('#65d6e9');
				setDesktopLogo("")
            } else {
                setPaperColor('#141f2b');
				setTextColor('#fff');
				setDesktopLogo("Ocolus1")
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove scroll event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleRef = (index) => {
		if (index == 0) {
			scrollToHome()
		} else if (index == 1) {
			scrollToExpertise()
		} else if (index == 2) {
			scrollToWork()
		}else if (index == 3) {
			scrollToExperience()
		}else if (index == 4) {
			scrollToContact()
		}
	}

	const handleLinkHover = (event) => {
		const links = document.querySelectorAll('.top-nav');
		links.forEach(link => link.classList.add('top-navs'));
	};

	const handleLinkHoverOut = (event) => {
		const links = document.querySelectorAll('.top-nav');
		links.forEach(link => link.classList.remove('top-navs'));
	};

	return (
		<Paper className="sticky top-0 border-0 shadow-0 z-40 " sx={{ backgroundColor: paperColor }} elevation={0}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="#app-bar-with-responsive-menu"
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: '#fff',
							textDecoration: 'none',
						}}
						className="text-2xl"
					>
						{desktopLogo}
					</Typography>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'flex', md: 'none' },
						}}
					>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{pages.map((page) => (
								<MenuItem
									key={page}
									onClick={handleCloseNavMenu}
								>
									<Typography textAlign="center">
										{page}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<AdbIcon
						sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
					/>
					<Typography
						variant="h5"
						noWrap
						component="a"
						href="#app-bar-with-responsive-menu"
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						LOGO
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'Roboto mono',
						}}
						className="justify-center text-lg"
					>
						{pages.map((page, index) => (
							<Link
								key={page}
								onClick={() => handleRef(index)}
								onMouseOver={handleLinkHover}
								onMouseOut={handleLinkHoverOut}
								sx={{
									my: 2,
									color: textColor,
									display: 'block',
									transition: 'color 0.3s',
									'&:hover': {
										color: '#fff',
									},
								}}
								className="top-nav px-5 font-bold hover:cursor-pointer text-lg"
								underline="none"
							>
								<Badge badgeContent={`0${index + 1}`} className="bg-transparent">
									{page}
								</Badge>
							</Link>
						))}
					</Box>
				</Toolbar>
			</Container>
		</Paper>
	);
}
export default ResponsiveAppBar;
