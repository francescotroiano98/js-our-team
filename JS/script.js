
const myTeamList = [
       {
           name: 'Wayne Barnett ',
           role : 'Founder & CEO',
           profilePhoto : 'wayne-barnett-founder-ceo.jpg',
           
        },
       {
            name: 'Angela Caroll',
            role : 'Chief Editor',
            profilePhoto : 'angela-caroll-chief-editor.jpg',
            
        },
       {
            name: 'Walter Gordonl',
            role : 'Office Manager',
            profilePhoto : 'walter-gordon-office-manager.jpg',
            
        }, 
        {
            name: 'Angela Lopez',
            role : 'Social Media Manager',
            profilePhoto : 'angela-lopez-social-media-manager.jpg',
            
        },
        {
            name: 'Scott Estrada',
            role : 'Developer',
            profilePhoto : 'scott-estrada-developer.jpg',
            
        },
        {
            name: 'Barbara Ramos',
            role : 'Graphic Designer',
            profilePhoto : 'barbara-ramos-graphic-designer.jpg',
            
        },

     ];
 
     console.log(myTeamList)


     function createUl(){

        const ulContainer = document.createElement("div"); //Sono partito col creare 6 ul
        ulContainer.classList.add("container-fluid")
        ulContainer.classList.add("d-flex")
        ulContainer.classList.add("flex-wrap")
        ulContainer.classList.add("justify-content-between")
        ulContainer.classList.add("p-4")
        for(let i=0; i < myTeamList.length; i++){
        
        const newUl = document.createElement("ul");
        newUl.classList.add("card")

        newUl.classList.add("p-0")
        
        for (let j = Object.keys(myTeamList[i]).length - 1 ; j >= 0 ; j--){ // Object.keys(myTeamList[i]).length ---->Numero di chiavi presenti nell'oggetto

            const liElements = document.createElement("li"); // Di questi 6 ul ognuno ha 3 li all'interno 
            if (j === 2) {
                liElements.innerHTML = "<img src='img/" + myTeamList[i].profilePhoto + "' alt=''>";// ho assegnato il valore del contenuto dell'array ad ogni li
              } else if (j === 0) {
                liElements.textContent =  myTeamList[i].name;
                
              } else if (j === 1) {
                liElements.textContent =  myTeamList[i].role;
                
              }
            newUl.appendChild(liElements)
        }

        ulContainer.appendChild(newUl);
        }
        return ulContainer;
     }
     
     const ulContainer = createUl();

     console.log(ulContainer);

     const container = document.getElementById("container");

     container.appendChild(ulContainer);

