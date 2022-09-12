import { Grid, Link } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Grid item xs={12} sx={{ backgroundColor: '#212529', color: 'white', textAlign: 'center', padding: '10px' }}>
            <p>@ "Knitted - Hand made" Shop Project</p>
            By: <Link href='https://daskalidan.github.io/me/' target="_blank" rel="noreferrer" underline="hover" sx={{ color: '#dbc536' }}>Daskal Idan</Link>
        </Grid>
    )
}

export default Footer