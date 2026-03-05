# Image Setup Guide for New Projects

## 📸 Adding Custom Images for TravelSmooth & Haval Society

Currently, the new projects use placeholder images from Unsplash. Here's how to add your own custom images:

---

## Option 1: Using Local Images (Recommended)

### Step 1: Add Images to Public Folder
1. Navigate to `/public/lovable-uploads/` directory
2. Add your images with these names:
   - `travel.jpg` or `travel.png` - For TravelSmooth project
   - `haval.jpg` or `haval.png` - For Haval Society project

### Step 2: Update Image Paths
The code already references these paths, so once you add the images, they'll automatically appear:
```typescript
// In ProjectsSection.tsx and CaseStudiesSection.tsx
image: "/lovable-uploads/travel.jpg"  // TravelSmooth
image: "/lovable-uploads/haval.jpg"   // Haval Society
```

### Recommended Image Specifications:
- **Format**: JPG or PNG
- **Dimensions**: 1500x1000px (3:2 aspect ratio)
- **File Size**: Under 500KB for optimal loading
- **Quality**: 80-85% compression for web

---

## Option 2: Continue Using Unsplash (Current Setup)

The projects currently use these Unsplash images:
- **TravelSmooth**: Travel/luggage theme
  ```
  https://images.unsplash.com/photo-1488646953014-85cb44e25828
  ```
- **Haval Society**: Luxury car theme
  ```
  https://images.unsplash.com/photo-1492144534655-ae79c964c9d7
  ```

**Pros**: No additional files needed, images load from CDN
**Cons**: May not match exact brand identity

---

## Option 3: Use Screenshots from Live Sites

### Taking Screenshots:
1. Visit https://travelsmooth.com.pk/
2. Take a high-quality screenshot of the hero section
3. Visit https://havalsociety.com/
4. Take a high-quality screenshot of their hero/featured section
5. Optimize images using tools like:
   - TinyPNG (https://tinypng.com/)
   - ImageOptim (Mac)
   - Squoosh (https://squoosh.app/)

### Save & Upload:
1. Save optimized images as `travel.jpg` and `haval.jpg`
2. Place in `/public/lovable-uploads/`
3. Done! They'll automatically display

---

## Current Image Locations

### Projects Needing Images:
```
TravelSmooth Pakistan
├── ProjectsSection: Line 38
└── CaseStudiesSection: Line 60

Haval Society
├── ProjectsSection: Line 46
└── CaseStudiesSection: Line 71
```

### Files to Update (if changing from Unsplash):
1. `/src/components/sections/ProjectsSection.tsx`
   - Line 38: TravelSmooth image
   - Line 46: Haval Society image

2. `/src/components/sections/CaseStudiesSection.tsx`
   - Line 60: TravelSmooth case study image
   - Line 71: Haval Society case study image

---

## Quick Replace Script

If you want to switch from Unsplash to local images, replace these lines:

### In ProjectsSection.tsx:
```typescript
// TravelSmooth (around line 38)
image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1500&q=80",
// Change to:
image: "/lovable-uploads/travel.jpg",

// Haval Society (around line 46)
image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1500&q=80",
// Change to:
image: "/lovable-uploads/haval.jpg",
```

### In CaseStudiesSection.tsx:
```typescript
// TravelSmooth (around line 60)
image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1500&q=80",
// Change to:
image: "/lovable-uploads/travel.jpg",

// Haval Society (around line 71)
image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1500&q=80",
// Change to:
image: "/lovable-uploads/haval.jpg",
```

---

## Image Optimization Tips

### For Best Performance:
1. **Resize** to exact display dimensions (1500x1000px)
2. **Compress** to 80-85% quality
3. **Convert** large PNGs to JPG if no transparency needed
4. **Use WebP** format for even better compression (optional)

### Tools:
- **Squoosh**: https://squoosh.app/ (Free, browser-based)
- **TinyPNG**: https://tinypng.com/ (Free, easy to use)
- **ImageOptim**: Mac app (Free)
- **Sharp**: CLI tool (Advanced users)

---

## Testing Your Images

After adding images:
1. Restart dev server: `npm run dev`
2. Navigate to homepage
3. Scroll to "Featured Projects" section
4. Check both project cards display correctly
5. Scroll to "Case Studies" section
6. Navigate through slider to verify case study images

---

## Troubleshooting

### Image Not Showing?
- ✅ Check file path is correct
- ✅ Verify image is in `/public/lovable-uploads/`
- ✅ Confirm file extension matches code (.jpg vs .png)
- ✅ Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- ✅ Restart dev server

### Image Quality Issues?
- ✅ Use higher resolution source (minimum 1500px width)
- ✅ Reduce compression (try 90% quality)
- ✅ Check original image quality

### Slow Loading?
- ✅ Compress images (target <500KB file size)
- ✅ Consider WebP format
- ✅ Use Next.js Image component for optimization

---

## Next.js Image Component (Advanced)

For even better optimization, consider converting to Next.js Image component:

```typescript
import Image from 'next/image';

// Replace:
<img src={project.image} alt={project.title} className="..." />

// With:
<Image
  src={project.image}
  alt={project.title}
  width={1500}
  height={1000}
  className="..."
  priority={project.featured}
/>
```

**Benefits**:
- Automatic lazy loading
- Responsive images
- WebP conversion
- Better performance

---

**Need Help?** Contact your development team or refer to Next.js Image documentation:
https://nextjs.org/docs/app/api-reference/components/image
