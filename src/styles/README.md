# 📁 CSS Architecture - Digital Reward Chest

## 📂 File Structure

```
src/styles/
├── base.css              # 🎨 Fonts, CSS Variables, Reset
├── layout.css            # 📱 Main layout, containers, sections
├── animations.css        # ✨ Keyframes, transitions, effects
├── responsive.css        # 📱 All media queries organized
├── admin.css             # 👨‍💼 Admin panel styles
├── components/
│   ├── navbar.css        # 🧭 Navigation bar styles
│   ├── hero.css          # 🦸‍♂️ Hero section & chest container
│   ├── cards.css         # 🃏 Info cards styling
│   ├── chest.css         # 📦 Chest component & lottie
│   ├── buttons.css       # 🔘 All button styles
│   ├── forms.css         # 📝 Forms, modals, inputs
│   ├── footer.css        # 🦶 Footer sections
│   └── particles.css     # ✨ Background particles effects
└── README.md            # 📖 This guide
```

## 🚀 Quick Edit Guide

### 🎨 Want to change colors?
**Edit**: `base.css`
```css
:root {
  --primary-green: #2B8232;      /* Main green color */
  --primary-light-green: #2BF924; /* Bright green for hovers */
  --secondary-green: #A6CA6A;     /* Light green for accents */
}
```

### 🔘 Need to adjust buttons?
**Edit**: `components/buttons.css`
- `.chest-button` - Main "Abrir Cofre" button
- `.register-button` - Registration buttons
- `.secondary-button` - Secondary actions

### 📦 Chest positioning issues?
**Edit**: `components/chest.css`
- `.chest-section` - Chest positioning (current: `translateY(-60px) translateX(40px)`)
- `.chest-main-container` - Fine-tuning positioning
- `.chest-lottie-container` - Lottie scaling and overflow

### 🃏 Card styling changes?
**Edit**: `components/cards.css`
- `.cards-container` - Container layout and spacing
- `.info-card` - Individual card styling
- `.card-content` - Content layout inside cards

### 📱 Mobile responsiveness?
**Edit**: `responsive.css`
- Organized by breakpoints: 991px (tablet), 768px (mobile), 480px (small mobile)
- All responsive rules in one place

### 🧭 Navigation issues?
**Edit**: `components/navbar.css`
- `.navbar` - Main nav styling
- `.nav-links` - Navigation menu
- `.nav-check-button` - "Ya me anoté" button

### ✨ Animations not working?
**Edit**: `animations.css`
- All `@keyframes` definitions
- `.flying-number`, `.ticket-popup` animations
- Transition effects

### 👨‍💼 Admin panel changes?
**Edit**: `admin.css`
- Complete admin dashboard styling
- Tables, forms, and admin-specific components
- User management interfaces

### ✨ Particle effects issues?
**Edit**: `components/particles.css`
- Background particle animations
- Canvas-based effect styling
- Particle system positioning

## 📏 CSS Variables (Design System)

### Colors
- `--primary-green`: Main brand color
- `--primary-light-green`: Hover states, highlights
- `--secondary-green`: Secondary elements
- `--text-primary`: Main text color
- `--text-secondary`: Secondary text
- `--text-white`: White text

### Spacing
- `--spacing-sm`: 0.5rem (8px)
- `--spacing-md`: 1rem (16px)
- `--spacing-lg`: 1.5rem (24px)
- `--spacing-xl`: 2rem (32px)
- `--spacing-xxl`: 3rem (48px)

### Effects
- `--border-radius`: 8px
- `--border-radius-lg`: 12px
- `--shadow-sm`: Small shadow
- `--shadow-md`: Medium shadow
- `--shadow-lg`: Large shadow
- `--transition-fast`: 0.2s ease
- `--transition-normal`: 0.3s ease

## 🔧 Common Tasks

### Change chest position
1. Open `components/chest.css`
2. Find `.chest-section`
3. Modify `transform: translateY(-60px) translateX(40px)`

### Change card spacing
1. Open `components/cards.css`
2. Find `.cards-container`
3. Modify `gap` property

### Change button colors
1. Open `base.css` to change CSS variables globally
2. Or edit `components/buttons.css` for specific buttons

### Add new breakpoint
1. Open `responsive.css`
2. Add new `@media` query in organized structure

### Modify animations
1. Open `animations.css`
2. Find the specific `@keyframes` or animation class
3. Adjust timing, easing, or properties

### Fix particle overflow issues
1. Open `components/particles.css`
2. Check `.particles-container` positioning
3. Adjust `z-index` and `overflow` properties

### Admin panel styling
1. Open `admin.css`
2. Find specific admin component classes
3. Modify colors using CSS variables from `base.css`

## 💡 Benefits of This Structure

✅ **Easy to find**: Each component has its own file  
✅ **Maintainable**: Changes are isolated and predictable  
✅ **Scalable**: Easy to add new components  
✅ **Consistent**: CSS variables ensure design consistency  
✅ **Mobile-first**: Responsive design centralized  
✅ **Performance**: Better CSS organization and loading  

## 🚨 Important Notes

- **Always edit the modular files**, not the main `style.css`
- **CSS variables** in `base.css` affect the entire site
- **Responsive rules** are all in `responsive.css` for easier management
- **Import order matters** - base styles load first, then components 

## 🏗️ Naming Conventions

### CSS Classes
- **BEM-like structure**: `.component-element--modifier`
- **Component-based**: `.chest-section`, `.card-content`
- **Utility classes**: `.cursor-pointer`, `.overflow-hidden`

### CSS Variables
- **Colors**: `--primary-green`, `--text-primary`
- **Spacing**: `--spacing-sm`, `--spacing-lg`
- **Effects**: `--shadow-md`, `--transition-fast`

## 🚨 Troubleshooting

### ❌ Styles not applying?
1. **Check import order** - base styles should load first
2. **CSS specificity** - use more specific selectors if needed
3. **Cache issues** - Hard refresh (Ctrl+F5) your browser

### ❌ Mobile layout broken?
1. **Check responsive.css** - all mobile rules are centralized there
2. **Viewport meta tag** - ensure it's in your HTML
3. **Test breakpoints** - 991px, 768px, 480px

### ❌ Animations not smooth?
1. **Browser performance** - check if hardware acceleration is enabled
2. **Animation properties** - prefer `transform` and `opacity`
3. **Reduce motion** - consider `prefers-reduced-motion` for accessibility

### ❌ Font not loading?
1. **Font paths** - check `base.css` font-face declarations
2. **Font formats** - ensure browser compatibility
3. **Font display** - `font-display: swap` for better performance

## 📋 Best Practices

### ✅ Do's
- **Use CSS variables** for consistent theming
- **Edit component files** individually for better organization
- **Test responsive** on multiple devices
- **Follow naming conventions** for maintainability
- **Group related styles** in appropriate component files

### ❌ Don'ts
- **Don't edit style.css directly** - use modular files
- **Don't use inline styles** - keep styles in CSS files
- **Don't hardcode colors** - use CSS variables instead
- **Don't ignore responsive design** - mobile-first approach
- **Don't use !important** unless absolutely necessary

## 🎯 Performance Tips

### 🚀 Optimization
- **CSS variables** reduce bundle size and improve consistency
- **Modular structure** enables better caching
- **Minimal specificity** improves rendering performance
- **Font preloading** in HTML for critical fonts
- **Animation optimization** using `transform` and `opacity`

### 📊 Loading Strategy
1. **Critical CSS** - base styles and layout load first
2. **Component styles** - loaded as needed
3. **Animation styles** - can be deferred
4. **Admin styles** - only loaded for admin users

## 🔗 Useful Resources

- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [BEM Methodology](https://getbem.com/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Animation Performance](https://web.dev/animations-guide/)