interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

interface Links {
  self: string;
  html: string;
  download?: string;
  download_location?: string;
  photos?: string;
  likes?: string;
  portfolio?: string;
  following?: string;
  followers?: string;
}

interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

interface User {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location: string;
  links: Links;
  profile_image: ProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
}

interface Exif {
  make: string;
  model: string;
  exposure_time: string;
  aperture: string;
  focal_length: string;
  iso: number;
}

interface Position {
  latitude: string|null;
  longitude: string|null;
}

interface Location {
  title: string;
  name: string|null;
  city: string|null;
  country: string|null;
  position: Position;
}

export class Image {
  id: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  description: string|null;
  alt_description: string|null;
  urls: Urls;
  links: Links;
  categories: string[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: string[];
  user: User;
  exif: Exif;
  location: Location;
  views: number;
  downloads: number;
}
