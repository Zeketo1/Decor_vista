import image_1 from "../../assets/images/image_1.png";
import image_4 from "../../assets/images/image_4.png";
import image_5 from "../../assets/images/image_5.png";
import image_6 from "../../assets/images/image_6.png";
import image_7 from "../../assets/images/image_7.png";
import image_8 from "../../assets/images/image_8.png";
import image_9 from "../../assets/images/image_9.png";
import image_10 from "../../assets/images/image_10.png";
import image_11 from "../../assets/images/image_11.png";
import image_12 from "../../assets/images/image_12.png";
import image_13 from "../../assets/images/image_13.png";
// import image_14 from "../../assets/images/image_14.png";



export const designs = [
    {
        id: Math.floor(Math.random() * Date.now()),
        title: 'Modern Minimalist',
        description: 'Clean lines, neutral colors, and a focus on simplicity create a modern and clutter-free living space.',
        image: image_12,
        categories: ['Minimalist', 'Contemporary', 'Urban'],
        designer: 'Emma Thompson'
    },
    {
        id: Math.floor(Math.random() * Date.now()),
        title: 'Rustic Charm',
        description: 'Natural elements, warm tones, and vintage accents bring a cozy, rustic charm to your home.',
        image: image_11,
        categories: ['Rustic', 'Vintage', 'Cozy'],
        designer: 'John Doe'
    },
    {
        id: Math.floor(Math.random() * Date.now()),
        title: 'Urban Luxury',
        description: 'Sophisticated and chic designs with luxurious materials and bold accents for an urban living experience.',
        image: image_6,
        categories: ['Luxury', 'Modern', 'Urban'],
        designer: 'Sophia Lee'
    },
    {
        id: Math.floor(Math.random() * Date.now()),
        title: 'Scandinavian Serenity',
        description: 'Bright, airy spaces with clean lines and natural textures that evoke a sense of calm and simplicity.',
        image: image_7,
        categories: ['Scandinavian', 'Minimalist', 'Modern'],
        designer: 'Liam Brown'
    },
    {
        id: Math.floor(Math.random() * Date.now()),
        title: 'Art Deco Glam',
        description: 'Bold geometric patterns, rich colors, and luxurious materials create a glamorous and sophisticated ambiance.',
        image: image_8,
        categories: ['Art Deco', 'Glam', 'Luxury'],
        designer: 'Olivia Martinez'
    },
    {
        id: Math.floor(Math.random() * Date.now()),
        title: 'Industrial Chic',
        description: 'Exposed brick, metal accents, and reclaimed wood elements combine to create a stylish industrial look.',
        image: image_9,
        categories: ['Industrial', 'Modern', 'Urban'],
        designer: 'Ethan Wilson'
    },
    {
        id: Math.floor(Math.random() * Date.now()),
        title: 'Bohemian Retreat',
        description: 'A vibrant mix of colors, patterns, and textures that bring a relaxed, bohemian vibe to your home.',
        image: image_13,
        categories: ['Bohemian', 'Eclectic', 'Cozy'],
        designer: 'Mia Anderson'
    },
    {
        id: Math.floor(Math.random() * Date.now()),
        title: 'Classic Elegance',
        description: 'Timeless designs with rich wood finishes, luxurious fabrics, and sophisticated color palettes.',
        image: image_11,
        categories: ['Classic', 'Traditional', 'Luxury'],
        designer: 'Noah Davis'
    },
    {
        id: Math.floor(Math.random() * Date.now()),
        title: 'Mid-Century Modern',
        description: 'Retro-inspired designs with clean lines, functional form, and a blend of natural and man-made materials.',
        image: image_1,
        categories: ['Mid-Century', 'Modern', 'Retro'],
        designer: 'Isabella Taylor'
    },
    {
        id: Math.floor(Math.random() * Date.now()),
        title: 'Coastal Breeze',
        description: 'Light, airy spaces with a nautical touch, featuring soft blues, whites, and natural textures.',
        image: image_12,
        categories: ['Coastal', 'Nautical', 'Relaxed'],
        designer: 'James Harris'
    },
    {
        id: Math.floor(Math.random() * Date.now()),
        title: 'Farmhouse Fresh',
        description: 'Rustic charm with a fresh, modern twist, combining practical design with inviting, homey elements.',
        image: image_13,
        categories: ['Farmhouse', 'Rustic', 'Cozy'],
        designer: 'Ava Scott'
    }
];

export const appointments = [
    {
        designer: "John Doe",
        design_name: "Modern Living Room",
        date: "22/09/2024",
        time: "14:00",
        title: "Living Room Decor Consultation",
        price: 300
    },
    {
        designer: "Jane Smith",
        design_name: "Minimalist Bedroom",
        date: "23/09/2024",
        time: "10:30",
        title: "Bedroom Design Consultation",
        price: 250
    },
    {
        designer: "Alice Brown",
        design_name: "Scandinavian Kitchen",
        date: "24/09/2024",
        time: "16:00",
        title: "Kitchen Decor Planning",
        price: 400
    },
    {
        designer: "Michael Green",
        design_name: "Vintage Dining Room",
        date: "25/09/2024",
        time: "11:00",
        title: "Dining Room Redesign",
        price: 350
    },
    {
        designer: "Sophia White",
        design_name: "Industrial Office Space",
        date: "26/09/2024",
        time: "09:30",
        title: "Office Space Decor Consultation",
        price: 450
    }
];


