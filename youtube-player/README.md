# React Architecture of this project

Credit to https://medium.com/@nabendu82/create-youtube-player-in-reactjs-part-1-3b949de9b251

## App components
*SearchBar
*VideoDetail (Player + titles)
*VideoList
*VideoListItem

###SearchBar
Updated props onSearchChange when you type and updates VideoList

###VideoDetail
Requires a loading screen but uses standard props and rendering otherwise

###VideoList 
Takes parameters as props from App and creates object `VideoListItem` using map function then later renders the unordered list element (ul) on the page

###VideoListItem (child of Video List)
Takes the props from the `VideoList` and creates a list element (li) for each and passes it back to VideoList