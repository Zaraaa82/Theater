//querySelectorAll will look at the html document and search for all items that match '.seat' and it will return a nodelist
const seats = document.querySelectorAll('.seat');

/*
Explanation:

1. seats.forEach(seat => { ... })
   - "seats" is a list of all the elements with the class '.seat'.
   - "forEach" goes through every seat one by one.
   - "seat" represents the current seat in the loop.

2. seat.addEventListener('click', () => { ... })
   - For each seat, we add an event listener.
   - The event we are listening for is 'click'.
   - When a seat is clicked, the function inside will run.

3. seat.classList.toggle('selected');
   - "classList" gives us all the classes of the seat element.
   - "toggle('selected')" will:
        - Add the class "selected" if it doesn’t exist.
        - Remove the class "selected" if it already exists.

Final Idea:
This code makes it so that when you click on a seat, it toggles the "selected" class.
- If the seat is not selected → it becomes selected.
- If it’s already selected → it goes back to unselected.
*/


seats.forEach(seat => {
    seat.addEventListener('click', () => {
        seat.classList.toggle('selected');
    });
});
