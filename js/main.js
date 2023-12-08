const milestoneData = JSON.parse(data).data;
console.log(milestoneData);

// load milestone data
function loadMilestone() {
    const milestones = document.querySelector('.milestones');

    milestones.innerHTML = `${milestoneData.map(function(milestone){
          
        return `
        <div class="milestone border-b">
        <div class="flex">
          <div class="checkbox"><input type="checkbox" /></div>
          <div onclick="openMilestone(this)">
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

function openMilestone(milestoneElement){
      const currentPanel = milestoneElement.parentNode.nextElementSibling;
      console.log(currentPanel);

      currentPanel.classList.toggle('show');
}

loadMilestone();