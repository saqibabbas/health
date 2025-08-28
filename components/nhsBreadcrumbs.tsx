'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Breadcrumbs as MUIBreadcrumbs, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const NHSBreadcrumbs = () => {
  const pathname = usePathname();
    if (pathname === '/' || pathname === '') return null;

  const pathSegments = pathname.split('/').filter(segment => segment);

  return (
    <MUIBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="small" />}
      sx={{ margin: 2 }}
    >
      <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        Home
      </Link>
      {pathSegments.map((segment, index) => {
        const href = '/' + pathSegments.slice(0, index + 1).join('/');
        const isLast = index === pathSegments.length - 1;
        return isLast ? (
          <Typography key={href}  sx={{ textTransform:"capitalize", color:"text.primary" ,fontWeight:"bold"}}>
            {segment.replace(/-/g, ' ')}
          </Typography>
        ) : (
          <Link key={href} href={href} style={{ textDecoration: 'none', color: 'inherit', textTransform:"capitalize" }}>
            {segment.replace(/-/g, ' ')}
          </Link>
        );
      })}
    </MUIBreadcrumbs>
  );
};

export default NHSBreadcrumbs;
