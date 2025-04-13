import { NavMenuItem } from "@interfaces/ui.interfaces";

// Define page routes here. The reason we use a constant is so that we can
// easily update routes in future. E.g. if "blog", became "articles" in future.
// We would have to search and replace the '/blog' route in every template that
// it's used. This way, we can update it once, in one place.
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  LOGIN: '/login',
  ADMIN: '/admin',
  BLOG: '/blog',
  CONTACT: '/contact'
}

export const SITENAV_ITEMS: NavMenuItem[] = [
  {
    label: 'Home',
    url: ROUTES.HOME
  },
  {
    label: 'Blog',
    url: ROUTES.BLOG
  },
  {
    label: 'About',
    url: ROUTES.ABOUT
  },
  {
    label: 'Contact',
    url: ROUTES.CONTACT
  },
]

