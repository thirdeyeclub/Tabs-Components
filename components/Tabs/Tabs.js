
class TabLink {
  constructor(element) {
    this.element = element;

    
   
    this.data = this.element.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    // this.itemElement;
    
    // Using the Item element, create a new instance of the TabItem class
    // this.tabItem;
    
    // Add a click event listener on this instance, calling the select method on click

  };

  select() {
    // Get all of the elements with the tabs-link class
    // const links;

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach();

    // Add a class named "tabs-link-selected" to this link
    // this.element;
    
    // Call the select method on the item associated with this link

  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
  //? Select all ".tabs-item" elements from the DOM
  const items = document.querySelectorAll('.tabs-items .tabs-item');

  //? Remove the class "tabs-item-selected" from each element
  Array.from(items).forEach(item => item.classList.remove('tabs-item-selected'));
  //? Add a class named "tabs-item-selected" to this element
  this.element.classList.toggle('tabs-item-selected');
  }
}

links = document.querySelectorAll(`.tab-links`).forEach( link => new TabLink(link));
