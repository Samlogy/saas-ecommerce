# Ecommerce Web App

## Purpose: 
Create a web app that allows to buy and sold products online
## Note:
This app is only a template that can be used to create a customized ecommerce app
### Features:
#### Shopping cart
1. add item to cart
2. increase quantity per item
3. decrease quantity per item
4. remove item
5. remove all items
6. display total
7. save all changes
#### Product
1. get All products
2. Filter / sort products
3. pagination products

#### Comment
1. get product details
2. get all comments related to a product
3. add a comment
4. reply to a comment
5. like / dislkie a comment
6. edit a comment
7. delete a comment
8. report a comment
#### Auth
1. SignIn
2. SignUp
3. SignOut
4. Forgot credentials (email / password) or ...
5. Reset password
6. edit user data

#### Payment:
1. add stripe.js (add business card) ex: visa, mastercard, discover, ...
2. paypal
3. crypto currency ?

mails (external api)
4. auth (ext#### Other Features:
1. internationalization (fr / en) --> easy way to translate ?
2. theme mode (light/dark)
3. sending eernal api) social media (google - twitter - apple)


#### Design App:
1. front + api (customer consumed) --> next (seo, ...) + nestjs + docker + tests
2. front + api (back-office) --> react + nestjs + docker + tests

NB: 
. customer side --> scale ?
. test (unit - intergration - e2e) ?
. Saas App ?
. re-create all schemas (backend) ?
. separate backOffice - customerApp ?
. micro-service app ?

### Tech stack:
1. React v18+
2. Typescript v4+
3. chakra-ui v2+ --> layout
4. zustand v4+ --> store
5. apollo graphQL v3+ --> call API
6. react-hook-form v7+ & yup --> (form validation)
7. react-router-dom v6+ --> routing
8. react icons v4+ --> assests (icons)
9. eslint + prettier setup --> configure it according to guidelines
10. vite v2+
11. NestJs v8+
12. Prisma v3+
13. Nextjs v12+
14. redis --> cache api side
15. rabbitmq --> handle queues
16. docker --> containerizing tech
17. github / git --> versionning
18. ? --> tests
