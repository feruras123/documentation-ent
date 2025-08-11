# Modern Sass Architecture

This read me contains a modernized Sass architecture with the latest best practices, CSS custom properties, and advanced features. Previous Sass was depreciated. Update made 6/17/2025
## File Structure

```
assets/styles/
├── app.scss                 # Main entry point
├── global.scss              # Global styles and base elements
├── fonts.scss               # Font declarations
├── output.scss              # Output styles
├── partials/                # Reusable Sass modules
│   ├── _variables.scss      # CSS custom properties and variables
│   ├── _functions.scss      # Custom Sass functions
│   ├── _mixins.scss         # Reusable mixins
│   ├── _buttons.scss        # Button styles
│   ├── _utilities.scss      # Utility classes
│   └── _themes.scss         # Theme system and color schemes
└── components/              # Component-specific styles
    ├── dashboard.scss       # Dashboard components
    ├── form.scss           # Form elements
    └── table.scss          # Table styles
```

## Modern Features

### CSS Custom Properties (CSS Variables)
- Runtime theming support
- Dynamic color changes
- Improved performance
- Better maintainability

### Modern CSS Functions
- `clamp()` for responsive values
- `min()`, `max()` for fluid layouts
- `aspect-ratio` for modern layouts
- Modern color functions

### Advanced Theming
- Light/Dark mode support
- High contrast mode
- Custom color palettes
- Semantic color naming

### Modern Utilities
- Spacing scale system
- Flexbox and Grid utilities
- Modern shadows and borders
- Accessibility utilities

## Usage Examples

### Using CSS Custom Properties
```scss
.my-component {
  background-color: var(--color-primary);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}
```

### Responsive Typography
```scss
.responsive-heading {
  @include responsive-text(1.5rem, 3rem);
}
```

### Modern Layouts
```scss
.card-grid {
  @include grid(3, var(--spacing-lg));
}

.flex-container {
  @include flex-between;
}
```

### Theme Switching
```scss
// Automatic dark mode
@media (prefers-color-scheme: dark) {
  :root {
    @include theme("dark");
  }
}

// Manual theme switching
.theme-dark {
  @include theme("dark");
}
```

### Modern Effects
```scss
.glass-card {
  @include glass-effect;
  @include card-base;
}

.gradient-button {
  @include gradient-primary;
  @include button-base;
}
```

## Available Functions

### Spacing
- `spacing($scale)` - Get spacing value from scale
- `responsive($min, $preferred, $max)` - Create responsive values

### Colors
- `color-lighten($color, $amount)` - Lighten color
- `color-darken($color, $amount)` - Darken color
- `color-alpha($color, $alpha)` - Add transparency

### Layout
- `aspect-ratio($width, $height)` - Calculate aspect ratio
- `z($layer)` - Get z-index value

## Available Mixins

### Layout
- `@include grid($columns, $gap)` - CSS Grid layout
- `@include flex-center` - Centered flexbox
- `@include flex-between` - Space-between flexbox

### Components
- `@include button-base` - Base button styles
- `@include card-base` - Base card styles
- `@include form-control-base` - Base form control styles

### Effects
- `@include glass-effect($blur, $opacity)` - Glass morphism
- `@include gradient-primary` - Primary gradient
- `@include focus-ring($color, $offset)` - Focus styles

### Accessibility
- `@include sr-only` - Screen reader only content
- `@include high-contrast` - High contrast mode styles
- `@include reduced-motion` - Reduced motion support

## Color System

### Base Colors
- `--color-primary` - Primary brand color
- `--color-success` - Success states
- `--color-warning` - Warning states
- `--color-danger` - Error states

### Semantic Colors
- `--color-text` - Main text color
- `--color-text-muted` - Muted text color
- `--color-background` - Page background
- `--color-surface` - Component surface
- `--color-border` - Border color

### Color Variations
Each color has 10 variations (50-900) for different use cases:
```scss
--color-primary-50   // Lightest
--color-primary-100
--color-primary-200
--color-primary-300
--color-primary-400
--color-primary-500  // Base color
--color-primary-600
--color-primary-700
--color-primary-800
--color-primary-900  // Darkest
```

## 📱 Responsive Design

### Breakpoints
- `xs`: 0px
- `sm`: 576px
- `md`: 768px
- `lg`: 992px
- `xl`: 1200px
- `xxl`: 1440px

### Usage
```scss
@include media-breakpoint-up(md) {
  // Styles for medium screens and up
}

@include media-breakpoint-down(lg) {
  // Styles for large screens and down
}
```

## ♿ Accessibility Features

### Focus Management
- Visible focus indicators
- Keyboard navigation support
- Screen reader compatibility

### Motion Preferences
- Respects `prefers-reduced-motion`
- Smooth animations for users who want them
- Instant transitions for users who don't

### High Contrast
- Automatic high contrast mode detection
- Enhanced contrast ratios
- Clear visual hierarchy

## Best Practices

1. **Use CSS Custom Properties** for values that might change
2. **Prefer mixins** over utility classes for complex patterns
3. **Use semantic naming** for colors and spacing
4. **Test with different themes** and accessibility modes
5. **Keep components modular** and reusable
6. **Use modern CSS features** when supported

## Migration Guide

### From Old Variables
```scss
// Old
background-color: $primary;

// New
background-color: var(--color-primary);
```

### From Old Functions
```scss
// Old
font-size: rfs(16, 14);

// New
font-size: responsive(14px, 16px, 18px);
```

### From Old Mixins
```scss
// Old
@include test(min-width, md) { ... }

// New
@include media-breakpoint-up(md) { ... }
```

## Resources

- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Modern CSS Features](https://web.dev/learn/css/)
- [Sass Documentation](https://sass-lang.com/documentation)
- [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) 