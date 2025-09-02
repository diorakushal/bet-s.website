# BETS Landing Page

A modern, bold, and sporty landing page for BETS - the social platform for sharing sports picks with friends.

## Features

- **Modern Design**: Dark theme with white accents, bold typography, and sporty aesthetics
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth animations, hover effects, and interactive elements
- **Supabase Integration**: Android waitlist form connected to Supabase database
- **SEO Optimized**: Clean HTML structure with proper meta tags

## Sections

1. **Hero Section**: Big headline, iOS download button, QR code placeholder, Android waitlist pill
2. **How it Works**: 3-step process explanation
3. **Features**: 4 feature cards highlighting key app capabilities
4. **Screenshots**: Carousel with placeholder images for app screenshots
5. **Social Proof**: User testimonials and quotes
6. **FAQ**: Common questions and answers
7. **Email Capture**: Android waitlist signup form
8. **Footer**: Links to legal pages

## Setup Instructions

### 1. Supabase Setup

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Create a new table called `android_waitlist` with the following columns:
   - `id` (int8, primary key)
   - `name` (text, not null)
   - `email` (text, not null, unique)
   - `created_at` (timestamptz, default: now())

3. Update the Supabase credentials in `script.js`:
   ```javascript
   const SUPABASE_URL = 'YOUR_SUPABASE_URL';
   const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
   ```

### 2. Logo Replacement

Replace `logo.png` with your actual BETS logo. The logo should be:
- Square format (recommended: 512x512px)
- PNG format with transparency
- High resolution for crisp display

### 3. QR Code

Replace the QR code placeholder in the hero section with your actual iOS App Store QR code.

### 4. Screenshots

Replace the screenshot placeholders in the carousel section with actual app screenshots:
- Feed screenshot
- Post pick screenshot  
- Profile screenshot

### 5. Customization

- **Colors**: Modify the CSS variables in `styles.css` to match your brand colors
- **Content**: Update text content in `index.html` to match your messaging
- **Links**: Update footer links and iOS app store links

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── logo.png           # BETS logo (replace with actual logo)
└── README.md          # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized images and assets
- Minimal JavaScript footprint
- Fast loading times
- SEO-friendly structure

## Deployment

The landing page can be deployed to any static hosting service:

- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Push to a GitHub repository
- **AWS S3**: Upload files to an S3 bucket

## Customization Notes

- The design uses a dark theme with white accents for a bold, sporty look
- All interactive elements have hover states and smooth transitions
- The layout is fully responsive and mobile-optimized
- The Supabase integration handles duplicate email prevention
- Form validation includes both client-side and server-side checks

## Support

For any issues or questions about the landing page, please refer to the code comments or contact the development team.
