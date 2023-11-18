## About Website

![Jello](asset/readme-image/website-deployed.png)
Hi, I am Irfan. I want to present my website Jello, a digital banking app used to help your digital needs. I designed this simple website with yellow and orange theme which is a bright eye-catching color for this website. I have made sure this website is responsive for mobile and tablet users.
For any feedback feel free to contact me [linkedin](https://www.linkedin.com/in/irfan-prima-lazuardi-316731a8/)

## Structure

- Navbar
- Header
- Main
  - Feature section
  - Partnership section
  - Review section
- Footer

## Dependencies & External libraries

- HTML
- CSS
- JavaScript
- External/Internal Source
  - font awesome
  - image
  - font

## How To Set Up

### Setup Project

To be able to access this project, make sure you have a github account and you can follow these steps:

1. Clone this repository
```
   https://github.com/revou-fsse-3/milestone-1-irfanplazuardi.git
```
3. Create a new branch name "development" to separate branch from main branch
```
   git branch -b "development"
```
5. Checkout to the new branch
```
   git checkout -b "development
```
7. Modify the website with your personal preferences, once it is done you will need to push your code

```
git add.
git commit -m "update message" //make sure to be as descriptive as possible
git push origin development
```

5. Once it's done, you can merge the code into main branch for production build

```
git checkout main
git pull origin main
git merge development
git commit -m "merge development to main"
git push origin main
```

### Setup Fontawesome

1. open [cdn fontawesome](https://cdnjs.com/libraries/font-awesome) and copy the latest library link tag
```
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
```
3. Open your project in vs code and paste link inside the HTML head
4. Next choose your desired font awesome icon at [fontawesome.com](https://fontawesome.com/)
5. Search your icon by clicking the search button and type your desired icon, for example "Instagram"
6. Set icon design from color, animation, size, and position
7. copy HTML code
8. Go back to the vscode html file and paste the code, you can style it manually in HTML to get the exact size and color.
```
   <i class="fa-brands fa-Instagram" style="color: #ec0909; font-size: 4rem"></i>">
```
10. Check your code by clicking go live (make sure you have installed extension[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in vscode )

### Setup Font

1. Open [googlefont](https://fonts.google.com/)
2. Search font name from the search bar "Montserrat"
3. Click on the font option
4. Click download family
5. Extract font in your local computer
6. Open folder and copy file "Montserrat-VariableFont_wght.ttf"
7. Open your project in vs code and paste font in your asset font folder
8. To apply font you must add font face in your CSS with font family name and src file path

```
@font-face {
  font-family: StyleScript;
  src: url(asset/fonts/StyleScript-Regular.ttf);
}
```

9. Apply your font in your desired field

```
body {
  font-family: Montserrat;
}
```

10. Check your code by clicking go live in your vs code

## Deployment

In this project, I use Netlify for deployment. You can access my website here [Jello](https://pokemonteamphoenix.online/). Follow these steps to deploy your website:

### Connect Your Project with Netlify

1. Open [netlify](https://www.netlify.com/)
2. Login and then add new site by importing an existing project
3. Select deploy with github then select your project from repository
4. Click on deploy (repository name)
5. Wait for several minutes to build your website and make sure the status is published
   ![deploy1](asset/readme-image/deploy1.png)

### Deploy With Custom Domain

The custom domain I use in this project is from Niagahoster. So make sure to purchase a domain before proceeding through these steps:

1. Select your deployed sites from Netlify dashboard
2. Click on set up a custom domain
3. Input your domain address and click verify then continue till it shows DNS address
4. Copy the DNS address
5. Open niagahoster then login
6. Select your domain and go to DNS / Nameservers
7. Click change name server and paste DNS from Netlify
8. Click Save then wait 1x24 hours to make sure the website deployed
   ![deploy2](asset/readme-image/deploy2.png)
