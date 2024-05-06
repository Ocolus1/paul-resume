"use client";

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import Badge from '@mui/material/Badge';
import Paper from '@mui/material/Paper';
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

const pages = ['// home', '//expertise', '// work', '// experience', '// contact'];

function ResponsiveAppBar( { scrollToHome, scrollToExpertise, scrollToWork, scrollToExperience, scrollToContact }) {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const pathname = usePathname();
	const router = useRouter();

	const bgColor = pathname == "/" ? "#141f2b" : "transparent"

	const [paperColor, setPaperColor] = useState(bgColor);
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
                setPaperColor(bgColor);
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

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleRef = (index) => {
		if (index == 0) {
			if (pathname == "/") {
				scrollToHome()
			} else {
				router.push("/?scroll-to=home");
			}
		} else if (index == 1) {
			if (pathname == "/") {
				scrollToExpertise()
			} else {
				router.push("/?scroll-to=expertise");
			}
		} else if (index == 2) {
			if (pathname == "/") {
				scrollToWork()
			} else {
				router.push("/?scroll-to=work");
			}
		}else if (index == 3) {
			if (pathname == "/") {
				scrollToExperience()
			} else {
				router.push("/?scroll-to=experience");
			}
		}else if (index == 4) {
			if (pathname == "/") {
				scrollToContact()
			} else {
				router.push("/?scroll-to=contact");
			}
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
		<Paper
			className="sticky top-0 border-0 shadow-0 z-40 "
			sx={{ backgroundColor: paperColor }}
			elevation={0}
		>
			<style jsx>
				{`
					.MuiMenu-paper {
						background-color: rgba(26, 24, 28, 0.5) !important;
					}
				`}
			</style>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
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
							<MenuIcon className="text-white" />
						</IconButton>
						<Menu
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
							{pages.map((page, index) => (
								<MenuItem
									key={page}
									onClick={() => {
										handleRef(index);
										handleCloseNavMenu();
									}}
								>
									<Typography textAlign="center">
										{page}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Typography
						variant="h5"
						noWrap
						component="a"
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
						className="text-white"
					>
						Ocolus1
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
								<Badge
									badgeContent={`0${index + 1}`}
									className="bg-transparent"
								>
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
