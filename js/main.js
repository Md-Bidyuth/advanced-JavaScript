const milestoneData = JSON.parse(data).data;
console.log(milestoneData);

// load milestone data
function loadMilestone() {
    const milestones = document.querySelector('.milestones');

    milestones.innerHTML = `${milestoneData.map(function(milestone){
          console.log(milestone._id);
        return `
        <div class="milestone border-b" id="${milestone._id}">
        <div class="flex">
          <div class="checkbox"><input type="checkbox" onclick="markMilestone(this, ${milestone._id})" /></div>
          <div onclick="openMilestone(this, ${milestone._id})">
            <p>
              ${milestone.name}
              <span><i class="fas fa-chevron-down"></i></span>
            </p>
          </div>
        </div>
        <div class="hidden_panel">
          ${
            milestone.modules.map(function(module){
                // console.log(module.name);
                return `
                <div class="module border-b">
                <p>${module.name}</p>
                 </div>
                `;
            }).join("")
          }
        </div>
      </div>
        `
    }).join('')}`



}

function openMilestone(milestoneElement,id){
      const currentPanel = milestoneElement.parentNode.nextElementSibling;
    //   console.log(currentPanel);
      const activePanel = document.querySelector('.active');
      const shownPanel = document.querySelector('.show');
    
      if(!milestoneElement.classList.contains('active') && activePanel){
        activePanel.classList.remove('active');
      }
      milestoneElement.classList.toggle('active');
      console.log(milestoneElement);
      if(!currentPanel.classList.contains('show') && shownPanel){
            shownPanel.classList.remove('show');
      }
      
      currentPanel.classList.toggle('show');
      console.log(id);

      showMilestone(id);
}

function showMilestone(id){
    const milestoneImage = document.querySelector('.milestoneImage');
    const title = document.querySelector('.title');
    const description = document.querySelector('.details');

    milestoneImage.style.opacity = "0";
    milestoneImage.src = milestoneData[id].image;
    title.innerText = milestoneData[id].name;
    description.innerText = milestoneData[id].description;

       console.log(milestoneData[id].image);
}
 
const milestoneImage = document.querySelector('.milestoneImage');
   milestoneImage.onload = function(){
    this.style.opacity = "1";
}

function markMilestone(checkbox, id){
    const doneList = document.querySelector('.doneList');
    const milestoneList = document.querySelector('.milestones');
    const item = document.getElementById(id);

    if(checkbox.checked){
        milestoneList.removeChild(item);
        doneList.appendChild(item);
    } else {
        milestoneList.appendChild(item);
        doneList.removeChild(item);
        
    }
    
    
}

loadMilestone();