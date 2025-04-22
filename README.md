# **Casa Di Luna - Luxury Skincare Website**

## **Project Description**

Casa Di Luna is a luxury skincare website created to empower women by providing them with all the information they need to maintain healthy and radiant skin. Designed with elegance and functionality in mind, the website offers seamless navigation through skincare categories, a blog featuring expert articles on treatments, and a smooth shopping experience. The content of the site resonates with the idea of self-care and wellness, encouraging women to explore high-quality skincare products and treatments.

The website was crafted to provide an experience that is both visually stunning and easy to use, focusing on delivering value through in-depth skincare knowledge and curated products.

### **Target Audience**

Casa Di Luna is designed for women who are passionate about skincare, health, and wellness. It is ideal for those who want to explore effective skincare treatments, stay updated on the latest skincare trends, and find the perfect products for their skin. Whether a beginner or an expert, Casa Di Luna is made to guide every individual on their skincare journey.

## **Screenshots**

Here are some of the key pages of the website:

- **Home Page**  
  ![Home Page](/public/repo/home.png)

- **Shop Page**  
  ![Shop Page](/public/repo/shop.png)

- **Contact Page**  
  ![About us Page](/public/repo/aboutus.png)

- **Journal/Articles Page**  
  ![Journal Page](/public/repo/journal.png)

## **How the Project Was Built**

### **Technologies Used**

- **Next.js**: The project was built using Next.js for a fast and optimized React-based framework.
- **TypeScript**: TypeScript was used to ensure type safety, making the development process smoother and less error-prone.
- **Tailwind CSS**: Tailwind CSS was used for styling, allowing for a fast and responsive design that maintains a clean and modern aesthetic.
- **Shadcn/UI**: Shadcn/UI was integrated to streamline the UI components with an accessible and easy-to-use library that enhances the overall user interface experience.
- **Notion API**: The website uses the Notion API as a headless CMS to manage and display blog content dynamically. This allows for seamless updates and management of the content without needing a complex backend system.

### **Why These Technologies**

Using **Next.js** allows for optimal performance, with features like server-side rendering and static site generation, resulting in a faster, SEO-friendly site. **Tailwind CSS** ensures that the website is responsive and mobile-friendly, making it accessible to all users. **Notion API** is a key feature of the project, which gives flexibility and convenience in managing content without the need for additional CMS systems.

## **Notion API - A Game-Changer**

### **How Notion Helped in Building the Blog System**

Notion was integrated into the project as the CMS for managing and writing blog posts. This decision has been a huge time-saver, as it allows for easy content creation and management. Here’s how it works:

1. **Content Writing in Notion**: Instead of managing a separate CMS for articles, all the content is written directly within Notion. This allows for an intuitive interface where the team can easily write, edit, and organize blog posts, while also maintaining a consistent layout.
2. **Dynamic Fetching of Content**: The blog posts are dynamically fetched from Notion via the Notion API, ensuring that the content is always up-to-date without manual intervention.

3. **Custom Layouts**: The flexibility of Notion lets you customize how the content is displayed. Whether it's images, headings, paragraphs, or links, the layout created in Notion is mirrored exactly on the website.

### **Benefits**

- **Time-Efficiency**: Notion eliminates the need for a complicated backend system, saving time on both content creation and deployment.
- **Consistency**: Notion allows for seamless formatting of articles, so the content maintains a consistent look across the site, making it easy to scale.
- **Ease of Use**: With a simple interface, writers can focus purely on content creation without worrying about the technical aspects of a traditional CMS.

### **Database Screenshot**

Here's a look at how the blog database is organized within Notion for easy management:

![Notion Database Screenshot](/public/repo/notionDB.png)
![Article from Notion Database Screenshot](/public/repo/notionArticle.png)

## **Project Features**

- **Dynamic Blog System**: Content is dynamically pulled from Notion, providing a seamless and up-to-date user experience.
- **Responsive Design**: Fully responsive to provide an optimized experience across devices (mobile, tablet, and desktop).
- **Interactive Product Pages**: The shop pages are equipped with interactive features to help users discover and purchase skincare products.
- **Smooth Navigation**: User-friendly navigation through different sections of the site, including articles, shopping, and more.

## **Installation & Setup**

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/casadiluna.git
   cd casadiluna

   ```

2. **Install dependencies**
   npm install

3. **Run the development server**
   npm run dev

4. **Set up Notion Integration**

   - You’ll need a Notion API token and database ID to pull blog content. Set these up in your environment variables.

   NOTION_API_KEY=YOUR_API_KEY
   NOTION_DATABASE_ID=YOUR_NOTION_DATABASE_KEY
