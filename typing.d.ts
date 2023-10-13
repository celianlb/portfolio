interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
  }

export interface Techno extends SanityBody {
    _type: 'techno';
    name: string;
    title: string,
    image:  ImageBitmap;
    slug: {
        current: string;
    };
  }