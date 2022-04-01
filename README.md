# Project Overview

## Project Links

- [Github repo link](https://github.com/Louist00/rick-morty-project2)
- [Deployment link TBD]()

## Project Description

I decided to create an application that allows the user to search for characters from the television show "Rick and Morty". The use should be able to search by character name, location in which the character was seen, or the episode that they debuted in. A search will result in a full list of information about character including their name, species, location of origin, and episode. There will also be an option to save up to 10 of your favorite characters in a favorites list.

## API

I used this Rick and Morty API from  https://rickandmortyapi.com/

Sample of data:
```
{
id: 3,
name: "Summer Smith",
status: "Alive",
species: "Human",
type: "",
gender: "Female",
origin: {
name: "Earth (Replacement Dimension)",}
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Wireframe 1](https://res.cloudinary.com/dhslunnmd/image/upload/v1635796334/IMG_6823_qwoen2.jpg )
- [Wireframe 2](https://res.cloudinary.com/dhslunnmd/image/upload/v1635796335/IMG_6824_ysimhh.jpg )
- [React architecture](https://res.cloudinary.com/dhslunnmd/image/upload/v1635801072/IMG_6828_rduuaj.jpg)


### MVP/PostMVP - 5min

The mvp functionality will include basic character search abilities using character name and the ability to save specific characters to a list of favorites.

#### MVP 
- Find and use external api 
- Render data on page 
- Allow user to interact with the page

#### PostMVP 

- Add animations


## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the title | 
| Nav | This will render the nav | 
| Episode | This will render the episode name and number |
| Favorites | This will render a list of favorite characters |
| CharacterInfo | This will render the information about the characters searched |
| Location | This will render the locations |


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create components | H | 8hrs| TBD | TBD |
| Working with API | H | 8hrs| TBD | TBD |
| Routing | H | 5hrs| TBD | TBD |
| Links | H | 3hrs| TBD | TBD |
| Styling | H | 3hrs| TBD | TBD |
| Total | H | 6hrs| TBD | TBD |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
