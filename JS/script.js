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

        for(let i=0; i < myTeamList.length; i++){
        
        const newUl = document.createElement("ul");

        for (let j = 0 ; j < Object.keys(myTeamList[i]).length; j++){ // Object.keys(myTeamList[i]).length ---->Numero di chiavi presenti nell'oggetto

            const liElements = document.createElement("li"); // Di questi 6 ul ognuno ha 3 li all'interno 
            if (j === 0) {
                liElements.textContent = "Name: " + myTeamList[i].name;
              } else if (j === 1) {
                liElements.textContent = "Role: " + myTeamList[i].role;
              } else if (j === 2) {
                liElements.innerHTML = "<img src='img/" + myTeamList[i].profilePhoto + "' alt=''>";// ho assegnato il valore del contenuto dell'array ad ogni li
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

