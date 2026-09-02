# Elevate Commerce

PREMIUM E-COMMERCE WEBSITE — FULL DEVELOPMENT PROMPT

Build a premium, modern, highly polished e-commerce website inspired by the reference website:

https://selahgirls.com/

The reference website should be used only to understand the business, product presentation, categories, general content direction, and shopping experience. Do not simply copy its design. Create a significantly more modern, premium, visually impressive and user-friendly experience.

The website must feel like a combination of a high-end fashion/lifestyle store and a modern mobile shopping app.

1. TECHNOLOGY REQUIREMENTS

Use ONLY:

React.js

Vite

JavaScript or TypeScript

React Router DOM

Tailwind CSS

Lucide React or another clean icon library

Axios or Fetch API

Context API for global state where needed

CSS animations/transitions where appropriate

DO NOT USE:

Next.js

TanStack Query

TanStack Router

NextAuth

Server Components

Any Next.js-specific functionality

The application must be a proper React + Vite SPA.

Keep the code clean, modular, reusable and production-ready.

2. DESIGN DIRECTION

The website should look:

Premium

Modern

Elegant

Minimal

Fashionable

Clean

Professional

Visually rich

Mobile-first

Smooth

Easy to navigate

Avoid making it look like a generic e-commerce template.

Do not overcrowd the interface.

Use generous whitespace, beautiful typography, high-quality product imagery and subtle animations.

The UI should feel like a real commercial product that could be launched publicly.

3. RESPONSIVE DESIGN

This is extremely important.

The website must work beautifully across:

Large desktop screens

Normal desktop screens

Laptops

Tablets

iPhones

Android phones

Small mobile screens

Do NOT simply shrink the desktop layout on mobile.

Desktop and mobile should have intelligently different layouts while maintaining the same design language.

Pay special attention to:

320px

375px

390px

414px

768px

1024px

1280px

1440px+

No horizontal scrolling.

No overlapping elements.

No text overflowing.

No broken images.

No buttons becoming impossible to tap.

4. DESKTOP NAVIGATION

Create a beautiful desktop navigation system.

Header should include:

Store logo

Home

Shop

Categories

Collections

New Arrivals

About

Search

Wishlist

Account

Cart

The header should feel premium and spacious.

Use subtle hover animations.

The header can become sticky while scrolling.

Create a beautiful search interaction.

When the user clicks search, display a modern search interface with:

Search input

Recent searches

Suggested products

Categories

Search results

Clear button

5. MOBILE NAVIGATION

This is one of the most important parts of the project.

On mobile, create a fixed bottom navigation bar.

It should remain visible while the customer browses the website.

Use beautiful modern icons.

Navigation:

Home

Search

Shop

Wishlist

Account

Example:

Home | Search | Shop | Wishlist | Account

The active page should have a clear visual state.

The bottom navbar should:

Have a premium appearance

Have subtle shadow/elevation

Have rounded or slightly elevated styling

Respect phone safe areas

Never cover page content

Have large enough touch targets

Animate smoothly when switching tabs

The cart should also have a highly visible floating/cart indicator, either in the top header or integrated elegantly into the mobile experience.

6. HOMEPAGE

Create a visually impressive homepage.

Sections should include:

Hero Section

Large, beautiful fashion/lifestyle imagery.

Include:

Strong headline

Short supporting text

Primary CTA

Secondary CTA

Beautiful image composition

Example CTA:

"Shop Collection"

"Explore New Arrivals"

Use subtle animations.

Do not make the hero overly complicated.

Featured Categories

Display major categories in beautiful cards.

Each category should have:

Image

Category name

Short description

Shop button

Examples:

Dresses

Tops

Bottoms

Accessories

Shoes

Bags

New Arrivals

New Arrivals

Create a modern product grid.

Each card should contain:

Product image

Product name

Price

Previous price if discounted

Discount badge

Wishlist icon

Quick add button

On hover:

Slight image zoom

Secondary image if available

Quick add interaction

On mobile:

Keep cards clean

Use a 2-column grid where appropriate

Make buttons easy to tap

Featured Collection

Create a large editorial-style section.

Use a large image with text overlay or split layout.

Make this section visually different from normal product grids.

Best Sellers

Display popular products.

Include:

Product image

Product name

Rating

Price

Wishlist

Quick add

Promotional Banner

Create an attractive promotional section.

Examples:

"Up to 30% Off Selected Styles"

"New Season. New You."

Use a strong CTA.

Testimonials

Create a beautiful customer review section.

Include:

Customer name

Rating

Review

Optional profile image

Use a carousel on smaller screens.

Newsletter

Create a clean newsletter signup.

Include:

Heading

Supporting text

Email input

Subscribe button

Footer

Desktop footer should contain:

Logo

About

Shop

Customer Service

Contact

Social media

Newsletter

Terms

Privacy

Refund Policy

Mobile footer should collapse intelligently.

7. SHOP PAGE

Create a dedicated shop page.

Include:

Page title

Breadcrumb

Categories

Product count

Sort dropdown

Filter button

Product grid

Desktop:

Use a sidebar filter.

Mobile:

Use a bottom-sheet/modal filter.

Filters:

Category

Price

Size

Color

Availability

Rating

Discount

Sorting:

Featured

Newest

Price: Low to High

Price: High to Low

Best Selling

Highest Rated

8. PRODUCT CARD

Create a reusable premium ProductCard component.

It must support:

Image

Product name

Price

Old price

Discount

Rating

Wishlist

Quick add

Add to cart

Out-of-stock state

Interactions should be smooth.

Do not use excessive animations.

9. PRODUCT DETAILS PAGE

Create a beautiful product details experience.

Desktop:

Two-column layout.

Left:

Large image gallery.

Right:

Product name

Rating

Reviews

Price

Discount

Product description

Available sizes

Available colors

Quantity selector

Add to Cart

Buy Now

Wishlist

Delivery information

Return information

Below:

Description

Product details

Size guide

Reviews

Related products

Recently viewed products

Mobile:

Make the product images swipeable.

Keep the purchase controls extremely accessible.

Consider a sticky bottom purchase bar containing:

Add to Cart | Buy Now

10. SHOPPING CART

Create a polished cart page.

Each item:

Product image

Product name

Variant

Price

Quantity

Remove

Wishlist/move to wishlist

Order summary:

Subtotal

Discount

Shipping

Total

Buttons:

Continue Shopping

Checkout

Show empty-cart state when there are no products.

11. WISHLIST

Create a wishlist page.

Users can:

View saved products

Remove products

Add products to cart

View product details

Create a beautiful empty state.

12. CHECKOUT

Create a simple multi-step checkout.

Steps:

Customer Information

Delivery Address

Delivery Method

Payment

Order Confirmation

Keep the checkout clean and distraction-free.

Do not show unnecessary navigation during checkout.

Payment should be structured so a payment gateway such as Paystack can be connected later.

13. ORDER CONFIRMATION

After successful checkout:

Show:

Success animation

Order number

Order summary

Total

Delivery information

Estimated delivery

Payment status

Buttons:

Track Order

Continue Shopping

14. CUSTOMER ACCOUNT

Create a customer dashboard.

Pages:

Overview

Show:

Recent orders

Total orders

Wishlist count

Account information

Orders

Show:

Order number

Date

Items

Total

Payment status

Delivery status

Allow customers to open individual order details.

Order Tracking

Show a timeline:

Order Placed
↓
Payment Confirmed
↓
Processing
↓
Shipped
↓
Out for Delivery
↓
Delivered

Wishlist

Customer's saved products.

Addresses

Allow:

Add address

Edit address

Delete address

Set default address

Profile

Allow customers to edit:

Name

Email

Phone

Password

Profile image

15. SEARCH

Create a powerful search experience.

Search should support:

Product names

Categories

Tags

SKU

Show:

Search suggestions

Matching products

Categories

Recent searches

Create a good "No results found" state.

16. ADMIN DASHBOARD

Create a completely separate professional admin dashboard.

The admin dashboard should NOT look like the customer website.

It should look like a modern SaaS/business dashboard.

Use:

Sidebar navigation on desktop

Responsive navigation on mobile

Dashboard cards

Tables

Charts

Filters

Modals

Forms

Notifications

17. ADMIN DASHBOARD — OVERVIEW

Dashboard cards:

Total Revenue

Today's Revenue

Total Orders

Pending Orders

Total Customers

Total Products

Low Stock Products

Charts:

Sales over time

Orders over time

Revenue

Top products

Category performance

Recent orders table:

Order ID

Customer

Amount

Payment

Status

Date

Action

18. ADMIN PRODUCTS

Create a complete product management system.

Admin can:

Add product

Edit product

Delete product

View product

Duplicate product

Upload images

Manage inventory

Product fields:

Product name

Description

Category

Subcategory

Price

Discount price

SKU

Stock

Sizes

Colors

Product images

Tags

Featured

Best seller

New arrival

Status

Product creation should use a beautiful form.

Include image upload previews.

19. ADMIN ORDERS

Create order management.

Admin can:

View all orders

Search orders

Filter orders

Open order details

Update order status

Update payment status

Update delivery status

Statuses:

Pending

Confirmed

Processing

Shipped

Out for Delivery

Delivered

Cancelled

Refunded

20. ADMIN CUSTOMERS

Show:

Customer name

Email

Phone

Number of orders

Total spent

Date joined

Status

Admin can open a customer profile and see:

Customer information

Orders

Spending

Addresses

Account activity

21. ADMIN CATEGORIES

Admin should be able to:

Create category

Edit category

Delete category

Upload category image

Set category status

22. ADMIN COUPONS & DISCOUNTS

Create coupon management.

Fields:

Coupon code

Discount type

Percentage

Fixed amount

Minimum order

Maximum discount

Expiry date

Usage limit

Active/inactive

23. ADMIN HOMEPAGE MANAGEMENT

Admin should eventually be able to manage:

Hero banners

Featured collections

Featured products

Best sellers

Promotional banners

Categories

Testimonials

Make the dashboard structure ready for this functionality.

24. ADMIN ANALYTICS

Create analytics pages showing:

Revenue

Orders

Customers

Products sold

Average order value

Conversion-related metrics

Best selling products

Best performing categories

Allow filtering by:

Today

7 days

30 days

3 months

12 months

25. ADMIN SETTINGS

Include:

Store Settings

Store name

Logo

Contact email

Phone

Address

Social media

Payment

Structure settings for:

Paystack

Payment status

Currency

Shipping

Delivery options

Delivery charges

Delivery zones

Notifications

Order notifications

Customer notifications

Admin Users

Allow multiple admin users later.

26. AUTHENTICATION

Create authentication flows for:

Customer

Register

Login

Forgot password

Reset password

Logout

Admin

Admin login

Admin authentication

Protected admin routes

Role-based access

Never expose admin pages to normal customers.

27. ROUTING

Use React Router DOM.

Suggested routes:

/

/shop

/category/:slug

/product/:slug

/search

/cart

/wishlist

/checkout

/order-success

/account

/account/orders

/account/orders/:id

/account/wishlist

/account/addresses

/account/profile

/login

/register

/forgot-password

/admin/login

/admin

/admin/products

/admin/products/new

/admin/products/:id

/admin/orders

/admin/orders/:id

/admin/customers

/admin/customers/:id

/admin/categories

/admin/coupons

/admin/analytics

/admin/settings

28. COMPONENT ARCHITECTURE

Build reusable components.

Example:

components/

Navbar

MobileBottomNav

Footer

ProductCard

ProductGrid

ProductGallery

SearchBar

SearchOverlay

CategoryCard

HeroSection

PromoBanner

Rating

WishlistButton

QuantitySelector

CartItem

OrderCard

FilterSidebar

MobileFilterSheet

Modal

Toast

Loader

EmptyState

ErrorState

Button

Input

Select

Badge

Admin components:

AdminSidebar

AdminHeader

StatsCard

SalesChart

OrdersTable

ProductTable

CustomerTable

ProductForm

OrderStatusBadge

AdminModal

29. STATE MANAGEMENT

Use React Context where global state is required.

Create contexts such as:

AuthContext

CartContext

WishlistContext

Persist cart and wishlist where appropriate.

Do not introduce unnecessary state-management libraries.

Keep state simple and maintainable.

30. LOADING STATES

Every data-dependent section should have a proper loading state.

Use:

Skeleton loaders

Spinners where appropriate

Placeholder content

Avoid blank screens while loading.

31. ERROR STATES

Create useful error states.

Examples:

"Something went wrong."

"Unable to load products."

"Your cart couldn't be loaded."

Provide retry actions.

32. EMPTY STATES

Create beautiful empty states for:

Empty cart

Empty wishlist

No orders

No search results

No products

No notifications

Each should have:

Appropriate icon/illustration

Short explanation

CTA

33. ANIMATIONS

Use subtle, premium animations.

Examples:

Fade-in

Slide-up

Hover scale

Image zoom

Button feedback

Modal animation

Mobile navigation transitions

Cart updates

Toast notifications

Animations must be fast and smooth.

Do not over-animate the website.

The website should feel sophisticated rather than like a flashy animation demo.

34. ICONS

Use a consistent modern icon library such as Lucide React.

Do NOT mix random icon styles.

Icons should be:

Clean

Consistent

Easy to understand

Properly sized

35. ACCESSIBILITY

Implement:

Semantic HTML

Keyboard navigation

Accessible buttons

Proper labels

Alt text

Focus states

Sufficient contrast

Proper form validation

All interactive elements must be usable on touch screens.

36. PERFORMANCE

Optimize the application for:

Fast loading

Lazy-loaded images

Lazy-loaded routes where appropriate

Optimized components

Minimal unnecessary re-renders

Avoid loading everything at once.

37. IMAGE HANDLING

Use high-quality fashion/product imagery.

Images should:

Maintain proper aspect ratio

Have rounded corners where appropriate

Load efficiently

Have graceful fallback states

Never stretch unnaturally

Product images should be visually dominant.

38. MICRO-INTERACTIONS

Add polished interactions such as:

Wishlist heart animation

Cart item count animation

Add-to-cart toast

Button hover states

Product image transitions

Filter selection feedback

Order status indicators

These details should make the website feel expensive and professionally built.

39. MOBILE UX PRIORITY

Treat mobile as a first-class experience.

On mobile:

Bottom navigation must always be accessible

Product cards should be easy to tap

Filters should open as bottom sheets

Search should feel like a mobile shopping app

Product images should be swipeable

Checkout should be extremely simple

Buttons should have comfortable touch targets

Important actions should never be hidden

Make the mobile website feel almost like a native shopping application.

40. DESKTOP UX PRIORITY

Desktop should feel spacious and premium.

Use the larger screen to provide:

More product visibility

Larger product imagery

Sidebar filters

Better product comparisons

Spacious navigation

Editorial sections

Large promotional banners

Rich dashboards

Do not leave excessive empty areas without purpose.

41. DESIGN SYSTEM

Create a consistent design system for:

Colors

Typography

Spacing

Border radius

Shadows

Buttons

Inputs

Cards

Badges

Modals

Tables

Do not randomly style each component.

Everything should feel like one cohesive brand.

42. DATA STRUCTURE

Structure the frontend so it can connect to a real backend later.

Create clear service/API layers.

For example:

services/

authService

productService

orderService

customerService

categoryService

paymentService

Do not hard-code the entire application directly inside components.

Use mock data initially if the backend is not connected, but structure the application so replacing mock APIs with real APIs is easy.

43. SECURITY

Do not expose sensitive information in the frontend.

Do not put secret API keys in Vite environment variables that are intended to remain private.

Use environment variables correctly.

Admin routes must be protected.

Never trust frontend-only role checks for sensitive backend operations.

44. CODE QUALITY

Write clean production-quality code.

Avoid:

Giant components

Repeated code

Hardcoded repeated values

Unnecessary dependencies

Poor naming

Inline styles everywhere

Unused imports

Console errors

Broken routes

Use reusable components and sensible folder organization.

45. FINAL VISUAL QUALITY

The final website should give the impression that it was designed by a professional UI/UX team.

When someone opens it, the first reaction should be:

"This looks like a serious premium e-commerce brand."

It should NOT look:

Basic

Generic

Like a school project

Like an AI-generated template

Overcrowded

Outdated

Poorly responsive

Pay special attention to spacing, typography, imagery, alignment and visual hierarchy.

46. IMPORTANT DEVELOPMENT RULE

Do not build only the homepage and assume the rest will be completed later.

Build the application as a complete e-commerce system with:

Customer Website
+
Mobile Shopping Experience
+
Authentication
+
Cart
+
Wishlist
+
Checkout
+
Orders
+
Customer Dashboard
+
Admin Dashboard
+
Product Management
+
Order Management
+
Customer Management
+
Analytics
+
Settings

Everything should be structured to work together.

47. FINAL RESULT

The finished application should feel like:

A premium fashion e-commerce website on desktop + a modern shopping app on mobile + a powerful business management dashboard for the store owner.

Use the reference website for understanding the business and products, but create a much more polished, modern and professional UI/UX.

The most important priorities are:

Exceptional visual design

Excellent mobile responsiveness

Premium desktop experience

Beautiful mobile bottom navigation

Smooth shopping experience

Excellent product presentation

Simple checkout

Powerful admin dashboard

Clean React + Vite architecture

Production-quality code

Accessibility

Performance

Consistent design system

Smooth but subtle animations

Do not sacrifice functionality for aesthetics, and do not sacrifice aesthetics for functionality.

The final result should be something that can realistically be presented to a paying client and launched as a real e-commerce business.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/352b0eda-d252-4182-a9c2-741312539e99).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
#   S e l a h - G i r l s  
 #   S e l a h - G i r l s  
 