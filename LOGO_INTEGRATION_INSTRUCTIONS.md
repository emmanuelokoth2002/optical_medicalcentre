# Logo Integration Instructions

## Overview
I've successfully integrated your company logo and updated the application to use the correct company name "Eye Sight Optical and Medical Center Ltd." throughout the application.

## What's Been Done

### 1. Logo Component Created
- Created a reusable `Logo` component (`src/components/Logo.js`)
- Includes fallback to Eye icon if logo image fails to load
- Supports different sizes (small, medium, large, xlarge)
- Can show/hide text as needed

### 2. Components Updated
- **Navbar**: Now uses the Logo component instead of just the Eye icon
- **Footer**: Updated to use the Logo component with consistent branding

### 3. Company Name Standardization
- Updated all pages to use "Eye Sight Optical and Medical Center Ltd." consistently
- Fixed phone numbers to use the correct Kenyan format: +254 727864012
- Updated email addresses to use: eyesightopticalmedicalltd@gmail.com

### 4. Pages Updated
- **About**: Company name and history updated
- **Home**: Testimonials and section titles updated
- **Services**: No changes needed (already generic)
- **Contact**: Phone number in FAQ updated
- **Appointments**: Company name and contact info updated

## How to Replace the Placeholder Logo

### Current Logo Location
The placeholder logo is located at: `public/images/logo/eye-sight-logo.svg`

### To Use Your Actual Logo:

1. **Convert your PDF logo** to a web-friendly format:
   - PNG (recommended for photos/complex graphics)
   - SVG (recommended for simple graphics/logos)
   - JPG (acceptable but PNG is better)

2. **Replace the placeholder**:
   - Save your logo as `eye-sight-logo.png` (or keep as SVG)
   - Place it in `public/images/logo/`
   - Update the Logo component if needed (currently expects `.svg`)

3. **If using a different format**:
   - Edit `src/components/Logo.js`
   - Change line 11: `const logoPath = process.env.PUBLIC_URL + '/images/logo/eye-sight-logo.png';`

### Logo Specifications
- **Recommended size**: 64x64px minimum, 128x128px optimal
- **Format**: PNG with transparent background or SVG
- **File name**: `eye-sight-logo.png` or `eye-sight-logo.svg`

## Testing
After replacing the logo:
1. Run `npm start` to test the application
2. Check that the logo appears in:
   - Navigation bar
   - Footer
   - Any other locations where Logo component is used

## Customization Options
The Logo component supports several props:
- `size`: "small", "medium", "large", "xlarge"
- `showText`: true/false (show/hide company name)
- `className`: additional CSS classes
- `onClick`: click handler function

Example usage:
```jsx
<Logo size="large" showText={true} />
<Logo size="small" showText={false} />
```

## Notes
- The logo will automatically fallback to the Eye icon if the image fails to load
- All company names are now consistent across the application
- Contact information has been updated to match your actual details
