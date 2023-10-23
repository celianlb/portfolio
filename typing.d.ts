interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
  }

export interface Techno extends SanityBody {
    note(note: any): import("react").ReactNode;
    _type: 'techno';
    name: string;
    title: string,
    image:  ImageBitmap;
    slug: {
        current: string;
    };
    link: string;
    rating: rating;
  }
export interface Projects extends SanityBody {
    _type: 'projects';
    name: string;
    title: string,
    slug: {
        current: string;
    };
    image:  ImageBitmap;
    linkGitHub: string;
    link: string;
    type: string;
    techno: string;
    category: string;
  }
export interface Social extends SanityBody {
    _type: 'social';
    name: string;
    title: string,
    slug: {
        current: string;
    };
    image:  ImageBitmap;
    link: string;
  }
export interface Education extends SanityBody {
    _type: 'education';
    name: string;
    title: string,
    slug: {
        current: string;
    };
    school: string;
    year:  number;    
  }