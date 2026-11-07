

export const iconList = [
    {
     id: 1,
     icon: "fa-solid fa-cart-shopping"
    },
    {
     id:2,
     icon: "fa-solid fa-bag-shopping fa-fade"
    },
    {
     id:3,
     icon:"fa-solid fa-house"
    },
    {
     id:4,
     icon:"fa-solid fa-user"
    }
];

export const footer = [
    {
        Brand : "AllMart",
        Description: "AllMart connects shoppers with thoughtful independent stores across electronics, fashion, home goods, and everyday essentials.",
        Groups: [
            {
              title : "SHOPPING" ,
              links : [
                "Discover",
                "Wishlist",
                "My orders",
                "Categories",
                "New arrivals"
              ] 
            },
            {
              title : "CUSTOMER HELP",
              links : [
                "Help center",
                "Shipping & delivery",
                "Returns & refunds",
                "Payment methods",
                "Contact support"
              ] 
            },
            {
                title: "SELLERS",
                links: [
                "Sell on AllMart",
                "Seller dashboard",
                "Store policies",
                "Partner support",
                "Merchant resources"
              ]
            }
        ],

        Copyright: "© 2026 AllMart. Good finds. Great independent stores.",
        BottomLinks: ["Help center", "Privacy", "Terms"]
    }
];

export const categories = [
{ 
  id: "c1", 
  name: "All",
  className: "px-3 py-1 bg-[#13244A] rounded-2xl cursor-pointer hover:bg-[#1d4d91] hover:text-[#ffff]"
},
{ 
  id: "c2", 
  name: "Electronics"
},
{ 
  id: "c3", 
  name: "Fashion"
},
{ 
  id: "c4", 
  name: "Home & Office"
}
];

export const vendors = [
{
  id: "v1",
  name: "Tech Haven",
  category: "Electronics",
  rating: 4.8,
  image: "/images/techhavenstore.png",
  description: "Premium gadgets and electronics.",
  products: [
      { id: "p1", 
        name: "Wireless Noise-Cancelling Headphones", 
        price: 150000.00, 
        image: "/images/headphones.png", 
      description: "Industry leading noise cancellation." 
    },
    { 
      id: "p2", 
      name: "4K Ultra HD Smart TV", 
      price: 450000.00, 
      image: "/images/4KUltraHDSmartTV.png", 
      description: "55-inch smart display with HDR."
    }
   ]
},
{
id: "v2",
name: "Urban Kicks",
category: "Fashion",
rating: 4.5,
image: "/images/urbanStore.png",
description: "Latest sneakers and streetwear.",
products: 
        [
          { 
            id: "p3", 
            name: "Classic High-Top Sneakers", 
            price: 45000.00, 
            image: "/images/kickssshoe.png",
            description: "Durable and stylish everyday wear." 
        },
          { 
            id: "p4", 
            name: "Graphic Cotton Hoodie", 
            price: 25000.00, 
            image: "/images/kickscotton.png", 
            description: "100% organic cotton, oversized fit." 
          }
        ]
     }
];

