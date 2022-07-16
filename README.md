# Knitted
a full stack Ecommerce project for the "python fullstack developer course" at the jhonbryce academy.

## general info
the main theam for this project is an ecommerce shop selling knitted dolls, hand made.

server side uses python django framework with rest api interface.
clinte side is react js.

## app's components(front):
header: always shown on page top woth shop name and logo in the middle.
footer: at the bottom of each page with copiryte and contact us link
### main page:
left 4/12:
a user status container - displaying (guest/ user name if loged) and login/logout/register links.
a cart container - display the product chosen to cart with total price and a link to checkout page. 
an item of the week container - display an img of item of the week with special price and an add to cart button.
right 8/12: 
cards for each product (4 in a row) 
each card  name, price, how many in stock and add to cart button(only if available in stock) under an image of the product.

### login page
header, footer same as main page - main section form with: user name, password, submit button all centered.

### register page
header, footer same as main page - main section: form with user name, email, password, shipping adress, type(customer/ stuff) and submit.

### checkout page


### contact/ about
header, footer same as main page - main section: all centerd, title shop name, shop's description/about, contact phone number, contact email, fisical adress, small map showing the adress. 

## data models(back)

### product model
### inventory model
### user model
### cart model
### purches model