(this["webpackJsonpdev-test-store"]=this["webpackJsonpdev-test-store"]||[]).push([[0],{14:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var i=a(1),r=a.n(i),n=a(8),o=a.n(n),s=(a(14),a(15),a(3)),c=a(4),d=a(6),l=a(5),p=a(0);var h=function(e){return Object(p.jsx)("div",{children:e.children})};var g=function(e){return Object(p.jsx)("div",{className:"row justify-content-center",children:Object(p.jsx)("h1",{children:e.children})})},m=a(9),u=a(2);var f=function(e){return Object(p.jsx)("form",{children:Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"search",children:"Search"}),Object(p.jsx)("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search for a product",id:"search"})]})})};var b=function(e){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"card",style:{width:"18 rem"},children:[Object(p.jsx)("img",{src:e.image,className:"card-img-top img-thumbnail",alt:e.title}),Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsx)("h5",{className:"card-title",children:e.title}),Object(p.jsxs)("p",{className:"card-text",children:["$",e.price]})]}),Object(p.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(p.jsx)("li",{className:"list-group-item",children:e.description}),Object(p.jsx)("li",{className:"list-group-item",children:e.category})]})]}),Object(p.jsx)("br",{}),Object(p.jsx)("hr",{})]})},y=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={search:"",results:u,products:u},e.searchProducts=function(t){e.setState({results:u});var a=e.state.products.filter((function(e){return!1!==e.title.toLowerCase().includes(t.toLowerCase())||!1!==e.category.toLowerCase().includes(t.toLowerCase())}));e.setState({results:a})},e.removeProduct=function(t){var a=e.state.results.filter((function(e){return u.id!==t}));e.setState({results:a})},e.handleInputChange=function(t){var a=t.target.name,i=t.target.value;e.setState(Object(m.a)({},a,i)),t.preventDefault(),setTimeout((function(){return e.searchProducts(e.state.search)}),1e3)},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{children:[Object(p.jsx)(f,{search:this.state.search,handleInputChange:this.handleInputChange}),Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col text-center",children:this.state.results.map((function(t){return Object(p.jsx)(b,{removeProduct:e.removeProduct,id:t.id,title:t.title,price:t.price,description:t.description,category:t.category,image:t.image},t.id)}))})}),Object(p.jsx)("hr",{}),Object(p.jsx)("br",{})]})}}]),a}(i.Component);var j=function(e){return Object(p.jsx)("div",{className:"container fluid",children:e.children})};var v=function(){return Object(p.jsx)("nav",{class:"navbar navbar-dark bg-dark",children:Object(p.jsx)("div",{class:"container-fluid",children:Object(p.jsx)("span",{class:"navbar-brand mb-0 h1 text-light",children:"Dev Test Store"})})})};var w=function(){return Object(p.jsx)("div",{className:"footer",children:Object(p.jsx)("div",{className:"container fluid",children:Object(p.jsx)("div",{className:"row justify-content-center fixed-bottom bg-dark",children:Object(p.jsxs)("div",{className:"col text-center",children:[Object(p.jsx)("br",{}),Object(p.jsx)("p",{className:"text-light",children:"\xa92021 George Joseph Brown. All rights reserved."})]})})})})},S=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(p.jsxs)(h,{children:[Object(p.jsx)(v,{}),Object(p.jsx)("br",{}),Object(p.jsx)(g,{children:"Welcome to the Test Store!"}),Object(p.jsx)(j,{children:Object(p.jsx)(y,{})}),Object(p.jsx)(w,{})]})}}]),a}(i.Component),O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,i=t.getFID,r=t.getFCP,n=t.getLCP,o=t.getTTFB;a(e),i(e),r(e),n(e),o(e)}))};o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root")),O()},2:function(e){e.exports=JSON.parse('[{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men clothing","image":"http://demo35067.appliances.dev.rwsgateway.com/fe-dev-test-files/m_bag_01.jpg"},{"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts","price":22.3,"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","category":"men clothing","image":"http://demo35067.appliances.dev.rwsgateway.com/fe-dev-test-files/m_shirt_01.jpg"},{"id":3,"title":"Mens Cotton Jacket","price":55.99,"description":"great outerwear jackets for SpringAutumnWinter, suitable for many occasions, such as working, hiking, camping, mountain rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.","category":"men clothing","image":"http://demo35067.appliances.dev.rwsgateway.com/fe-dev-test-files/m_jacket_02.jpg"},{"id":4,"title":"Mens Casual Slim Fit","price":15.99,"description":"The color could be slightly different between on the screen and in practice.  Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.","category":"men clothing","image":"http://demo35067.appliances.dev.rwsgateway.com/fe-dev-test-files/m_shirt_02.jpg"},{"id":5,"title":"John Hardy Women\'s Legends Naga Gold & Silver Dragon Station Chain Bracelet","price":695,"description":"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean\'s pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.","category":"jewelery","image":"http://demo35067.appliances.dev.rwsgateway.com/fe-dev-test-files/jewlery_04.jpg"},{"id":6,"title":"Solid Gold Petite Micropave","price":168,"description":"Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.","category":"jewelery","image":"http://demo35067.appliances.dev.rwsgateway.com/fe-dev-test-files/jewlery_02.jpg"},{"id":7,"title":"White Gold Plated Princess","price":9.99,"description":"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine\'s Day....","category":"jewelery","image":"http://demo35067.appliances.dev.rwsgateway.com/fe-dev-test-files/jewlery_03.jpg"},{"id":8,"title":"Pierced Owl Rose Gold Plated Stainless Steel Double","price":10.99,"description":"Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel","category":"jewelery","image":"http://demo35067.appliances.dev.rwsgateway.com/fe-dev-test-files/jewlery_01.jpg"},{"id":9,"title":"WD 2TB Elements Portable External Hard Drive - USB 3.0","price":64,"description":"USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user\u2019s hardware configuration and operating system","category":"electronics","image":"http://demo35067.appliances.dev.rwsgateway.com/fe-dev-test-files/electronic_01.jpg"},{"id":10,"title":"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gbs","price":64,"description":"Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5\u201d hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Readwrite speeds of up to 535MBs450MBs (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)","category":"electronics","image":"http://demo35067.appliances.dev.rwsgateway.com/fe-dev-test-files/electronic_02.jpg"},{"id":11,"title":"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5","price":109,"description":"3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.","category":"electronics","image":"http://demo35067.appliances.dev.rwsgateway.com/fe-dev-test-files/electronic_04.jpg"},{"id":12,"title":"WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive","price":114,"description":"Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer\'s limited warranty","category":"electronics","image":"http://demo35067.appliances.dev.rwsgateway.com/fe-dev-test-files/electronic_03.jpg"},{"id":13,"title":"Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin","price":599,"description":"21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate 75Hz - Using HDMI port Zero-frame design  ultra-thin  4ms response time  IPS panel Aspect ratio - 16 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz","category":"electronics","image":"http://demo35067.appliances.dev.rwsgateway.com/fe-dev-test-files/electronic_05.jpg"},{"id":14,"title":"Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) \u2013 Super Ultrawide Screen QLED","price":999.99,"description":"49 INCH SUPER ULTRAWIDE 329 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag","category":"electronics","image":"http://demo35067.appliances.dev.rwsgateway.com/fe-dev-test-files/electronic_06.jpg"},{"id":15,"title":"BIYLACLESEN Women\'s 3-in-1 Snowboard Jacket Winter Coats","price":56.99,"description":"2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates","category":"women clothing","image":"http://demo35067.appliances.dev.rwsgateway.com/fe-dev-test-files/w_jacket_01.jpg"},{"id":16,"title":"Lock and Love Women\'s Removable Hooded Faux Leather Moto Biker Jacket","price":29.95,"description":"100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort  2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist  Detail stitching at sides, HAND WASH ONLY  DO NOT BLEACH  LINE DRY  DO NOT IRON","category":"women clothing","image":"http://demo35067.appliances.dev.rwsgateway.com/fe-dev-test-files/w_jacket_02.jpg"},{"id":17,"title":"Rain Jacket Women Windbreaker Striped Climbing Raincoats","price":39.99,"description":"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn\'t overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.","category":"women clothing","image":"http://demo35067.appliances.dev.rwsgateway.com/fe-dev-test-files/w_jacket_03.jpg"},{"id":18,"title":"MBJ Women\'s Solid Short Sleeve Boat Neck V","price":9.85,"description":"95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline  Double stitching on bottom hem","category":"women clothing","image":"http://demo35067.appliances.dev.rwsgateway.com/fe-dev-test-files/w_shirt_01.jpg"},{"id":19,"title":"Opna Women\'s Short Sleeve Moisture","price":7.95,"description":"100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort","category":"women clothing","image":"http://demo35067.appliances.dev.rwsgateway.com/fe-dev-test-files/w_shirt_03.jpg"},{"id":20,"title":"DANVOUY Womens T Shirt Casual Cotton Short","price":12.99,"description":"95% Cotton, 5% Spandex, Features Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch. Occasion Casual Office Beach School Home Street. Season Spring, Summer, Autumn, Winter.","category":"women clothing","image":"http://demo35067.appliances.dev.rwsgateway.com/fe-dev-test-files/w_shirt_02.jpg"}]')}},[[17,1,2]]]);
//# sourceMappingURL=main.4ff070d8.chunk.js.map